import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Spinner } from "@material-tailwind/react";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
    if(loading || isAdminLoading){
        return <Spinner className="h-8 w-8 mx-auto mt-8" />
    }
    if(user && isAdmin){
        return children
    }
    
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;