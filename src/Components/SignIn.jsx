import React from "react";
import HeaderImage from "../assets/headerImg5.jpg";

const SignIn = () => {
  return (
    <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-blue-900 text-center hidden md:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-bold text-blue-500">
                Sign In
              </h1>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-l flex flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
                  type="text"
                  placeholder="Username"
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-blue-100"
                  type="password"
                  placeholder="Password"
                />
                <div className="flex items-center gap-2 mt-1">
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
                <h1 className="text-center">New Here? <span className="text-blue-500">Sign Up</span></h1>

                <div className="w-full mt-6">
                  <img
                    src={HeaderImage} 
                    alt="Beach"
                    className="h-52 w-full rounded-lg"
                  />
                </div>
                <p className="mt-6 text-s text-gray-600 text-center">
                  Or Sign In with ... ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
