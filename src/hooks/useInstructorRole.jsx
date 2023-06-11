import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructorRole = () => {
   const {user} = useAuth()
   const [axiosSecure] = useAxiosSecure();
   const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
    queryKey: ['isInstructor', user?.email],
    queryFn: async () => {
        const res = await axiosSecure(`/users/instructor/${user?.email}`);
        console.log(res.data)
        return res.data.instructor
    }
   })
   return [isInstructor, isInstructorLoading]
};

export default useInstructorRole;