import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleLogin} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            const savedUser = {name: loggedUser.displayName, email: loggedUser.email}
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(savedUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err))
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