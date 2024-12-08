import { Link } from "react-router-dom";
import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    if (!email.current || !password.current) {
      setErrorMessage("Input fields not initialized.");
      return; // Exit early if refs are still null
    }

    const message = checkValidData(
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    //Signin / signup logic

    if (!isSignInForm) {
      //signUp logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //signIn logic
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className=" ">
      <Header />
      <div className="absolute  ">
        <img
          alt="bg-img"
          src={BG_IMG_URL}
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-2/6 absolute bg-black my-24 mx-auto right-0 left-0 p-4 bg-opacity-90 flex flex-col rounded-md text-white"
      >
        <h1 className="font-bold text-3xl ml-12 mt-8 mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 mx-12 rounded-md bg-zinc-900 opacity-50 border border-white "
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="p-2 m-2 mx-12 rounded-md bg-zinc-900 opacity-50 border border-white "
        />

        <input
          ref={password}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="p-2 m-2 mx-12 rounded-md bg-zinc-900 opacity-50 border border-white "
          onMouseEnter={() => setShowPassword(true)}
          onMouseLeave={() => setShowPassword(false)}
        />

        {!isSignInForm && (
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="p-2 m-2 mx-12  rounded-md bg-zinc-900 opacity-50 border border-white "
          />
        )}

        {!isSignInForm && (
          <h1 className="ml-12 text-sm flex items-center my-4">
            <input type="checkbox" className="w-4 h-4 mr-3" /> I accept the
            <span className="text-blue-600 mx-1  hover:underline hover:cursor-pointer">
              Terms of use
            </span>
            &
            <span className="text-blue-600 ml-1 hover:underline hover:cursor-pointer">
              Privacy Policy.
            </span>
          </h1>
        )}
        <p className="text-red-700 ml-12 text-sm py-2 font-medium">
          {errorMessage}
        </p>
        <button
          className="p-2 m-2 mx-12 bg-red-700 rounded-md font-medium"
          onClick={handleButtonClick}
        >
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
