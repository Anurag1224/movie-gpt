import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
// import {removeUser} from "../utils/userSlice";

const Header = () => {

  const navigate = useNavigate();  
  // const dispatch = useDispatch();
 const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // dispatch(removeUser);
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
      className="w-48 "
        alt="Logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && (<div className="flex items-center">
        <img className="w-10 h-10 m-1" alt="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" src= {user?.photoURL}/>
        <button onClick={handleSignOut} className="ml-2 font-bold text-white">Sign Out</button>
      </div>)}
    </div>
  );
};

export default Header;
