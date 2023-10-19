import React from "react";
import GoogleIcon from "../Assets/google.svg";
import { useGoogleLogin } from "@react-oauth/google";

const Button = ({ title, onLoginSuccess, isSignup, onSignUpSuccess }) => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      onLoginSuccess();
    },
  });

  const signup = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      onSignUpSuccess();
    },
  });

  return (
    <>
      <button
        className="flex flex-row gap-4 items-center justify-center bg-indigo-100 rounded-lg font-bold py-3 w-full max-w-xs shadow-sm focus:outline-none focus:shadow-sm mt-16 m-auto hover:shadow"
        onClick={isSignup ? signup : login}
      >
        <div className="bg-white rounded-full p-2">
          <img src={GoogleIcon} alt="" className="w-4" />
        </div>
        <span>{title} with Google</span>
      </button>
    </>
  );
};

export default Button;
