import React, { useState, useEffect } from "react";
import { getTravelPackages } from "../../api";
import { string } from "yup";
import { set } from "react-hook-form";
import axios from "axios";
const ManageTravelPackages = () => {

  const [travelPackage, setTravelPackages] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState();


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState([]);
  const [freeCancellation, setFreeCancellation] = useState(false);
  const [reserveNow, setReserveNow] = useState(false);
  const [description, setDescription] = useState("");

  const fetchTravelPackagess = async () => {
    const data = await getTravelPackages();
    setTravelPackages(data);
  };

  useEffect(() => {
    fetchTravelPackagess();
  }, []);

  const handleChange = (e) => {
    const selectedImage = Array.from(e.target.files);
    setFile(prevImage => [...prevImage, ...selectedImage]);
  }

  const hadnleRemoveImage = (index) => {
    setFile(file.filter((_, i) => i !== index))
  }

  const handleEdit = (travelPackage) => {
    setId(travelPackage.id);
    setIsEditing(true);
    setName(travelPackage.name);
    setPrice(travelPackage.price);
    setFile(travelPackage.imageUrl || []);
    setFreeCancellation(travelPackage.freeCancellation);
    setReserveNow(travelPackage.reserveNow);
    setDescription(travelPackage.description);
    console.log("Editing Travel Pakckages:", travelPackage);
  }

  const uploadImageToCloudinary = async (newImages) => {
    const cloudinaryUrl =
      "https://api.cloudinary.com/v1_1/dtnxy4t7e/image/upload";
    const uploadPreset = "tqrsuipi";


    // const imageUrls = await Promise.all(
    //   images.map(async (image) => {
    //     const formData = new FormData();
    //     formData.append("file", image);
    //     formData.append("upload_preset", uploadPreset);


    //     const response = await axios.post(cloudinaryUrl, formData);
    //     // return response.data.url;
    //     const imageUrl = response;

    //   })
    // )

    try {
      const imageUrls = await Promise.all(
        newImages
          .filter((image) => image instanceof Blob || image instanceof File)
          .map(async (file) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", uploadPreset);

            const response = await axios.post(cloudinaryUrl, formData);
            console.log("Response from Cloudinary", response.data.url);
            return response.data.url;
          })
      );
      console.log("Images are uploaded to Cloudinary", imageUrls);
      return imageUrls;
    }
    catch (err) {
      console.error("Error while uploading images to Cloudinary", err);

    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newImages = file.filter(
      (image) => image instanceof Blob || image instanceof File
    );

    const existingImageUrl = file.filter((image) => typeof image === "string");

    const newImageUrls = newImages.length > 0 ? await uploadImageToCloudinary(newImages) : [];

    console.log(`Uploaded images: ${newImageUrls}`);

    const combinedImageUrls = [...existingImageUrl, ...newImageUrls];
    console.log(`Combined image URLs: ${combinedImageUrls}`);
    const ImageUrl = combinedImageUrls.filter(
      (item) => Object.keys(item).length !== 0
    )

    const travelPackageData = {
      Name: name,
      Price: price,
      ImageUrl: ImageUrl,
      FreeCancellation: freeCancellation,
      ReserveNow: reserveNow,
      Description: description,
    };

    const uploadData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5102/api/TravelPackages", travelPackageData
        );
        console.log("Travel Package added:", response);
        setLoading(false);
        fetchTravelPackagess();
        resetForm();
      }
      catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    const editData = async () => {
      try {
        const response = await axios.put(`http://localhost:5102/api/TravelPackages/${id}`, travelPackageData);
        setLoading(false);
        fetchTravelPackagess();
        resetForm();
        console.log("This is the response", response);
      }
      catch (err) {
        console.log(err);
        setLoading(false);
      }
    }

    isEditing ? editData() : uploadData();
  };

  const resetForm = () => {
    setName("");
    setPrice("");
    setFile([]);
    setFreeCancellation(false);
    setReserveNow(false);
    setDescription("");
    setIsEditing(false);
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5102/api/TravelPackages/${id}`);
      console.log(response);
      fetchTravelPackagess();
    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="h-full w-full shadow-xl m-3">
        <h1 className="font-bold text-3xl mt-3 ml-3">Add New Travel Package</h1>
        <form className="ml-3" onSubmit={handleSubmit}>
          <p className="text-lg font-semibold mt-5">
            Name
          </p>
          <input
            className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <p className="text-lg font-semibold mt-5">
            Price
          </p>
          <input
            className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <p className="text-lg font-semibold mt-5">
            Images
          </p>
          <input
            className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
            type="file" multiple
            onChange={(e) => handleChange(e)} />
          <div className="flex gap-3">
            {file.map((imag, index) => (
              <div className="relative">
                <img
                  className="h-26 w-26 mt-5 object-cover rounded"
                  src={`${imag instanceof Blob || imag instanceof File ? URL.createObjectURL(imag) :imag}`} alt="image"
                />
                <button
                  type="button"
                  onClick={() => hadnleRemoveImage(index)}
                  className="h-6 w-6  absolute top-4 -right-1  rounded bg-red-600">
                  x
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <p className="text-lg font-semibold mt-5">
              Free Cancelation
            </p>
            <input
              className="w-[12px] h-[12px] mt-7 ml-auto mr-auto rounded-full"
              type="checkbox"
              checked={freeCancellation}
              onChange={(e) => setFreeCancellation(e.target.checked)}
            />
          </div>

          <div className="flex gap-11">
            <p className="text-lg font-semibold mt-5">
              Reserve Now
            </p>
            <input
              className="w-[12px] h-[12px] mt-7 ml-auto mr-auto rounded-full"
              type="checkbox"
              checked={reserveNow}
              onChange={(e) => setReserveNow(e.target.checked)}
            />
          </div>

          <p className="mt-5 font-semibold text-lg">
            Description
          </p>
          <textarea className="h-[100px] w-full px-5 py-3 rounded-md mt-5 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <button 
          type="submit"
          className={`bg-blue-500 text-white px-5 py-3 rounded-md mt-5 hover:outline-none hover:bg-indigo-700 ${loading ? "cursor-not-allowed bg-blue-300" : "cursor-pointer"}`}>

            {isEditing? "Edit Travel Package" : "Add Travel Package"}
          </button>
          </form>

        <div className=" w-full mt-10">
          <h1 className="font-bold text-3xl mt-3 ml-3">
            View Travel Packages
          </h1>

          <div className="relative">
            <table className="w-full text-md text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              {travelPackage.map((travelPackage) => (
                <tbody
                  key={travelPackage._id}
                >
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {travelPackage.name}
                    </th>
                    <td className="px-6 py-4">
                      {travelPackage.price}
                    </td>
                    <td>
                      <button className="text-white px-3 py-2 bg-green-600 rounded"
                        onClick={() => handleEdit(travelPackage)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button className="text-white px-3 py-2 bg-red-600 rounded"
                        onClick={() => handleDelete(travelPackage.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>

    </>
  );
}

export default ManageTravelPackages;
