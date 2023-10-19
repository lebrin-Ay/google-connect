import React from "react";

const Form = ({ buttonTitle }) => {

  return (
    <>
      <form className="mx-auto max-w-xs">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        />
        <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
          {buttonTitle}
        </button>
      </form>
    </>
  );
};

export default Form;
