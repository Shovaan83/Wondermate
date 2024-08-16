import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BGImg from "../../assets/undraw_signup.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from '../../Validation/formValidation';
import axios from "axios";


const SignUp = () => {

  const [role, setRole] = useState("User");
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   })
  //   console.log(formData);
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      signUpSchema
    )
  });

  const onSubmit = async (data) => {

    data.role = role;
    try
    {
      const response = await axios.post("http://localhost:5102/api/User", data);

      if (response.status === 200) {
        console.log("User created successfully", response.data);
        alert("User created successfully");
        navigate("/signin");
    }
  }

  catch (err) {
    console.log(err);
    alert(err.response.data);
  }

}

  // const onSubmit = (data) => {
  //   console.log(data);
  // };


  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='h-full w-full sm:h-[80%] sm:w-[80%] grid sm:grid-cols-2'
        style={{ boxShadow: "20px 20px 20px #DEDEDE" }}>

        <div className='bg-zinc-50'>
          <h1 className='text-5xl font-bold text-blue-700 text-center mt-8'>Sign Up</h1>
          <form
            // typeof='submit'
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex-1 mt-8 p-10">
            <div className="mx-auto max-w-md flex flex-col gap-4">
              <input
                className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                // onChange={(e) => {
                //   handleChange(e);
                // }}
                {...register("username")}
              />
              <p className='text-red-600 text-md font-semibold'>{errors.username?.message}</p>
              <input
                className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                // onChange={(e) => {
                //   handleChange(e);
                // }}
                {...register("email")}


              // {errors.email?.message}
              />
              <p className='text-red-600 text-md font-semibold'>{errors.email?.message}</p>
              <input
                className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                // onChange={(e) => {
                //   handleChange(e);
                // }}
                {...register("password")}
              />
              <p className='text-red-600 text-md font-semibold'>{errors.password?.message}</p>
              <input
                className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                id="confirmPassword"
                // onChange={(e) => {
                //   handleChange(e);
                // }}
                {...register("confirmPassword")}
              />
              <p className='text-red-600 text-md font-semibold'>{errors.confirmPassword?.message}</p>

              <div className="relative">
                <select
                  className="signup-input"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <button className="mt-5 tracking-wide font-semibold bg-blue-700 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <span className="ml-3">Sign Up</span>
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center gap-2 mt-2">
            <input
              type="checkbox"
              id="checkbox"
              {...register("Agreed")}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="checkbox" className="text-gray-600">
              I agree to the <span className="text-blue-600">Terms and Conditions</span>
            </label>
            {/* <p>{errors.Agreed?.message}</p> */}
          </div>
        </div>


        <div className='bg-zinc-50  '>

          <img
            style={{ objectFit: "fill", width: "80%", height: "80%", marginTop: "2%" }}
            src={BGImg}
            alt="Beach"
            className="h-52 w-full rounded-md"
          />

          <p className="mt-6 text-s text-gray-600 text-center">
            Already a member?{" "}
            <a href="/SignIn">
              <span className="text-blue-900 font-semibold">Sign in</span>
            </a>
          </p>

        </div>
      </div>

    </div>
  )
}

export default SignUp 