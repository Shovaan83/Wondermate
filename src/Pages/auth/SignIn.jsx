import React, { useState } from 'react'
import BGImg from "../../assets/undraw_signin.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from '../../Validation/formValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate();
  const [user,setUser]  = useState("User");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      signInSchema
    )
  });

  const onSubmit = async (data) => {
    try
    {
      const responseData = await axios.post("http://localhost:5102/api/Auth/SignIn", data);
      console.log(responseData);

      if(responseData.status == 200)
      {
        const { token, expiresIn, role } = responseData.data.response; 
        // console.log("Response Data:", responseData.data);

        alert("Sign In Successful");

        localStorage.setItem("token", token);
        localStorage.setItem("expiresIn", expiresIn);
        localStorage.setItem('role', role);
        setUser({ role });

        console.log("Role:", role);
        console.log("Expires In:", expiresIn);
        navigate(role === "Admin" ? "/dashboard" : "/user/tours");
      }
    }
    catch(err)
    {
      console.log(err);
    }
  };



  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='h-full w-full sm:h-[80%] sm:w-[80%] grid sm:grid-cols-2'
        style={{ boxShadow: "20px 20px 20px #DEDEDE" }}>

        <div className='bg-zinc-50'>
          <h1 className='text-5xl font-bold text-blue-700 text-center mt-20'>Sign In</h1>
          <form 
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex-1 mt-8 p-10">
            <div className="mx-auto max-w-md flex flex-col gap-4">
              <input
                className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
                type="text"
                name ="username"
                id="username"
                placeholder="Username"
                {...register("username")}
              />
              <p className='text-red-600 text-md font-semibold'>{errors.username?.message}</p>
              <input
                className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                {...register("password")}
              />
              <p className='text-red-600 text-md font-semibold'>{errors.password?.message}</p>
              <div className="flex flex-1 gap-2 mt-5">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <label htmlFor="checkbox" className="text-gray-600">
                  Remember Me
                </label>
              </div>
              <button className="mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <span className="ml-3">Sign In</span>
              </button>
              <p className="mt-6 text-s text-gray-600 text-center">
                New Here?{" "}
                <a href="/SignUp">
                  <span className="text-blue-900 font-semibold">Sign Up</span>
                </a>
              </p>
            </div>
          </form>
        </div>


        <div className='bg-zinc-50  '>

          <img
            style={{ objectFit: "fill", width: "80%", height: "80%" }}
            src={BGImg}
            alt="Beach"
            className="h-52 w-full rounded-md"
          />
          <p className=" text-s text-gray-600 text-center">
            Or sign in with ... ...
          </p>

        </div>
      </div>

    </div>
  )
}

export default SignUp 