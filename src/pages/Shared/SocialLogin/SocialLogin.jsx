import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAuth from "../../../hooks/useAuth";


const SocialLogin = () => {
    const {googleLogin} = useAuth()
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
    }
    return (
        <div className="text-center">
      <div className="divider"></div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-circle btn-outline text-blue-500 text-2xl my-4"
      >
        <FaGoogle></FaGoogle>
      </button>
    </div>
    );
};

export default SocialLogin;