import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selectedClass?email=${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return [classes, refetch];
};

export default useSelectedClasses;
