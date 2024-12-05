import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className=" ">
      <Header />
      <div className="absolute ">
        <img
          alt="bg-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_small.jpg"
        />
      </div>
      <form className="w-2/6 absolute bg-black my-24 mx-auto right-0 left-0 p-4 bg-opacity-90 flex flex-col rounded-md text-white">
        <h1 className="font-bold text-3xl ml-12 mt-8 mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 mx-12 rounded-md bg-zinc-900 opacity-50 border border-white "
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="p-2 m-2 mx-12 rounded-md bg-zinc-900 opacity-50 border border-white "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 mx-12 rounded-md bg-zinc-900 opacity-50 border border-white "
        />
        {!isSignInForm && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-2 m-2 mx-12 rounded-md bg-zinc-900 opacity-50 border border-white "
          />
        )}
        {!isSignInForm && (
          <h1 className="ml-12 text-sm flex items-center my-4">
            <input type="checkbox" className="w-4 h-4 mr-3" /> I accept the{" "}
            <span className="text-blue-600 mx-1  hover:underline hover:cursor-pointer">
              {" "}
              Terms of use{" "}
            </span>{" "}
            &{" "}
            <span className="text-blue-600 ml-1 hover:underline hover:cursor-pointer">
              {" "}
              Privacy Policy.{" "}
            </span>
          </h1>
        )}
        <button className="p-2 m-2 mx-12 bg-red-700 rounded-md font-medium">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm && <h1 className="text-center my-1 text-sm ">OR</h1>}
        {isSignInForm && (
          <button className="p-2 m-2 mx-12  font-medium bg-zinc-700 opacity-60 rounded-md hover:bg-zinc-800 ">
            Use a sign-in code
          </button>
        )}
        <Link>
          {isSignInForm && (
            <h1 className="text-center my-1 text-sm hover:text-gray-300 hover:underline">
              Forgot Password?
            </h1>
          )}
        </Link>
        {isSignInForm && (
          <h1 className="ml-12 text-sm mt-3 flex items-center">
            <input type="checkbox" className="w-4 h-4 mr-3" /> Remember me
          </h1>
        )}
        <h1 className="ml-12 text-sm mt-4 flex items-center">
          {isSignInForm ? "New to NetflixGPT?" : "Already Registered ?"}

          <span
            className="ml-1 font-semibold hover:underline hover:cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now." : "Sign In now."}
          </span>
        </h1>
        <p className="mx-12 text-xs mt-6 mb-8">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="text-blue-600 ml-1 hover:underline hover:cursor-pointer">
            Learn more
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
