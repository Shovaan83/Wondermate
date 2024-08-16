import React, { useState, useEffect } from "react";
import { getHotels } from "../../api";
import axios from "axios";
import DeleteModal from "../../Elements/DeleteModal";
import { typeOf } from "maplibre-gl";

const ManageHotel = () => {
  const [hotels, setHotels] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentHotel, setCurrentHotel] = useState({});
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();

  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [file, setFile] = useState([]);
  const [freeCancellation, setFreeCancellation] = useState(false);
  const [reserveNow, setReserveNow] = useState(false);
  const [description, setDescription] = useState("");

  const fetchHotels = async () => {
    const data = await getHotels();
    setHotels(data);
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const handleChange = (e) => {
    const selectedImage = Array.from(e.target.files);
    setFile((prevImage) => [...prevImage, ...selectedImage]);
  };

  const handleRemoveImage = (index) => {
    setFile((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleEdit = (hotel) => {
    setId(hotel.id);
    setIsEditing(true);
    setName(hotel.name);
    setPrice(hotel.price);
    setFile(hotel.imageUrl || []);
    setFreeCancellation(hotel.freeCancellation);
    setReserveNow(hotel.reserveNow);
    setDescription(hotel.description);
    cosole.log("Editing Hotel:", hotel);
  };

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

    // const imageUrls = uploadImageToCloudinary();
    // console.log(`This is the imageUrls ${imageUrls}`);

    const newImageUrls = newImages.length > 0 ? await uploadImageToCloudinary(newImages) : [];
    console.log(`Uploaded images: ${newImageUrls}`);

    const combinedImageUrls = [...existingImageUrl, ...newImageUrls];
    console.log(`Combined image URLs: ${combinedImageUrls}`);
    const ImageUrl = combinedImageUrls.filter(
      (item) => Object.keys(item).length !== 0
    );


    const hotelData = {
      Name: name,
      Price: price,
      ImageUrl: ImageUrl,
      FreeCancellation: freeCancellation,
      ReserveNow: reserveNow,
      Description: description,
    };


    // Determine whether to add or update hotel data
    const uploadData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5102/api/Hotel",
          hotelData
        );
        console.log("Hotel added:", response);
        setLoading(false);
        fetchHotels();
        resetForm();
      } catch (err) {
        console.error("Error adding hotel:", err);
        setLoading(false);
      }
    };

    const editData = async () => {
      try {
        const response = await axios.put(`http://localhost:5102/api/Hotel/${id}`, hotelData);
        setLoading(false);
        fetchHotels();
        resetForm();
        console.log("This is the response", response);
      }
      catch (err) {
        console.log(err);
        setLoading(false);
      }

    };

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
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5102/api/Hotel/${id}`);
      fetchHotels();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="h-full w-full shadow-xl m-3">
        <h1 className="font-bold text-3xl mt-3 ml-3">Add New Hotel</h1>
        <form className="ml-3" onSubmit={handleSubmit}>
          <p className="text-lg font-semibold mt-5">Name</p>
          <input
            className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="text-lg font-semibold mt-5">Price</p>
          <input
            className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <p className="text-lg font-semibold mt-5">Images</p>
          <input
            className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
            type="file"
            multiple
            onChange={handleChange}
          />
          <div className="mb-4 flex flex-wrap gap-2">
            {file.map((imag, index) => (
              <div className="relative" key={index}>
                <img
                  className="h-26 w-26 mt-5 object-cover rounded"
                  src={`${imag instanceof Blob || imag instanceof File ? URL.createObjectURL(imag) : imag}`}
                  alt="image"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="h-6 w-6 absolute top-4 -right-1 rounded bg-red-600"
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <p className="text-lg font-semibold mt-5">Free Cancellation</p>
            <input
              className="w-[12px] h-[12px] mt-7 ml-auto mr-auto rounded-full"
              type="checkbox"
              checked={freeCancellation}
              onChange={(e) => setFreeCancellation(e.target.checked)}
            />
          </div>
          <div className="flex gap-11">
            <p className="text-lg font-semibold mt-5">Reserve Now</p>
            <input
              className="w-[12px] h-[12px] mt-7 ml-auto mr-auto rounded-full"
              type="checkbox"
              checked={reserveNow}
              onChange={(e) => setReserveNow(e.target.checked)}
            />
          </div>
          <p className="mt-5 font-semibold text-lg">Description</p>
          <textarea
            className="h-[100px] w-full px-5 py-3 rounded-md mt-5 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className={`bg-blue-500 text-white px-5 py-3 rounded-md mt-5 hover:outline-none hover:bg-indigo-700 ${loading ? "cursor-not-allowed bg-blue-300" : "cursor-pointer"}`}
          >
            {isEditing ? "Update Hotel" : "Add Hotel"}
          </button>
        </form>
        <div className="w-full mt-10">
          <h1 className="font-bold text-3xl mt-3 ml-3">View Hotels</h1>
          <div className="relative">
            <table className="w-full text-md text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Price</th>
                  <th scope="col" className="px-6 py-3">Action</th>
                </tr>
              </thead>
              {hotels.map((hotel) => (
                <tbody key={hotel._id}>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {hotel.name}
                    </th>
                    <td className="px-6 py-4">{hotel.price}</td>
                    <td>
                      <button
                        className="text-white px-3 py-2 bg-green-600 rounded"
                        onClick={() => handleEdit(hotel)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="text-white px-3 py-2 bg-red-600 rounded"
                        onClick={() => {
                          setOpen(true);
                          setId(hotel.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <DeleteModal
            open={open}
            setOpen={setOpen}
            handleDelete={handleDelete}
            id={id}
          />
        </div>
      </div>
    </>
  );
};

export default ManageHotel;
