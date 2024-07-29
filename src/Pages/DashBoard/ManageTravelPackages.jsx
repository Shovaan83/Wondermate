import React, { useState, useEffect } from "react";
import { getTravelPackages } from "../../api";
import { string } from "yup";
const ManageTravelPackages = () => {

  const [travelPackage, setTravelPackages] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // const [images, setImages] = useState([]);
  const [freeCancellation, setFreeCancellation] = useState(false);
  const [reserveNow, setReserveNow] = useState(false);
  const [description, setDescription] = useState("");


  useEffect(() => {
    const fetchTravelPackagess = async () => {
      const data = await getTravelPackages();
      setTravelPackages(data);
    };
    fetchTravelPackagess();
  }, []);


  const [file, setFile] = useState([]);
  const handleChange = (e) => {
    const selectedImage = Array.from(e.target.files);
    setFile(prevImage => [...prevImage, ...selectedImage]);
  }

  const hadnleRemoveImage = (index) => {
    setFile(file.filter((_, i) => i !== index))
  }

  const handleEdit = (travelPackage) => {
    setIsEditing(true);
    setName(travelPackage.name);
    setPrice(travelPackage.price);
    setFile(travelPackage.img);
    setFreeCancellation(travelPackage.freeCancellation);
    setReserveNow(travelPackage.reserveNow);
    setDescription(travelPackage.desc);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDelete = (id) => {
    settravelPackages((prevtravelPackage) => prevtravelPackage.filter((travelPackage) => travelPackage.id !== id));
  }
  
  return (
    <>
      <div className="h-full w-full shadow-xl m-3">
        <h1 className="font-bold text-3xl mt-3 ml-3">Add New Travel Package</h1>

        <form className="ml-3"
        onSubmit={(e) => handleSubmit(e)}
        >
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
                  src={`${typeof imag === "string" ? imag : URL.createObjectURL(imag)}`} alt="image" 
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

          <button className="bg-blue-500 text-white px-5 py-3 rounded-md mt-5 hover:outline-none hover:bg-indigo-700  cursor-pointer">
            Add Travel Package
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
