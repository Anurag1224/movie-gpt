import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate} from "react-router-dom";
import {  useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import {useEffect} from "react";
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO_URL } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";


const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();  
  // const dispatch = useDispatch();
 const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {})
    .catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth , (user) => {
      if (user) {
      
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}));
        navigate("/browse");
        
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  },[]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
      className="w-48 "
        alt="Logo"
        src={LOGO_URL}
      />
      {user && (<div className="flex items-center">
        <button className="px-4 py-2 mx-4 m-2 text-white bg-purple-700 rounded-sm hover:bg-purple-600" onClick={handleGptSearchClick}>GPT Search</button>
        <img className="w-10 h-10 m-1" alt="user-icon" src= {user?.photoURL}/>
        <button onClick={handleSignOut} className="ml-2 font-bold text-white">Sign Out</button>
      </div>)}
    </div>
  );
};

export default Header;
