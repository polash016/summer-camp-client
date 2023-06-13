import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Spinner } from "@material-tailwind/react";
import useInstructorRole from "../hooks/useInstructorRole";

const InstructorRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructorRole()
    if(loading || isInstructorLoading){
        return <Spinner className="h-8 w-8 mx-auto mt-8" />
    }
    if(user && isInstructor){
        return children
    }
    
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default InstructorRoute;