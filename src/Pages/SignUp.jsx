import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/techsterverse.png";
import Button from "../Components/Button";
import Form from "../Components/Form";
import Hero from "../Assets/hero.svg";
import Modal from "../Components/Modal";

const SignUp = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSignUpSuccess = () => {
    setShowModal(true);
    setModalMessage("Account created successfully");
  };

  return (
    <div className="bg-white lg:bg-gray-100 flex flex-row justify-center sm:py-16 sm:px-8 2xl:px-[12rem] 2xl:pb-[9.2rem]">
      <section className="bg-white max-w-screen-xl m-0 lg:shadow flex flex-col px-6 sm:px-12 sm:rounded-tl-lg sm:rounded-bl-lg overflow-hidden lg:pb-16  pb-12">
        <header className="mt-8">
          <img src={Logo} alt="TechSterVerse Logo" className="mx-auto" />
        </header>

        <div className="mt-12 text-center">
          <h1 className="font-black text-2xl xl:text-3xl ">Sign up</h1>
          <Button
            title="Sign Up"
            onSignUpSuccess={handleSignUpSuccess}
            isSignup={true}
          />

          {showModal && (
            <Modal
              isOpen={showModal}
              message={modalMessage}
              onRequestClose={() => setShowModal(false)}
            />
          )}

          <div className="border-b my-12">
            <p className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              Or sign up with e-mail
            </p>
          </div>

          <div>
            <Form buttonTitle="Sign Up" />
          </div>

          <div>
            <Link
              to="/"
              className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
            >
              Have an account Sign in
            </Link>
          </div>
        </div>
      </section>

      <section className="flex-1 bg-indigo-100 text-center hidden lg:flex overflow-hidden ">
        <img src={Hero} alt="" className="overflow-hidden" />
      </section>
    </div>
  );
};

export default SignUp;
