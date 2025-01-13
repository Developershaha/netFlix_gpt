import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidateData from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    // first validate the form

    const message = checkValidateData(
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);

    // Sign / Sign Up
  };

  const toggleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_small.jpg"
          alt="background-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80  rounded-sm"
      >
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email address "
          className="p-2 my-4 w-full rounded-sm bg-gray-100 text-black"
          autoComplete="off"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name "
            className="p-2 my-4 w-full rounded-sm bg-gray-100  text-black"
            autoComplete="off"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4  w-full rounded-sm bg-gray-100  text-black"
          autoComplete="new-password"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600  w-full rounded-sm"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <button className="py-4 text-link" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix? Sign up now."
            : "Already registered ? Sign In Now ..."}
        </button>
      </form>
    </div>
  );
};

export default Login;
