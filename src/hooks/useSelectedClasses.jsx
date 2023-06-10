import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useSelectedClasses = () => {
    const {user} = useAuth()
    const { data: classes = [], refetch, isLoading: loading } = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/selectedClass?email=${user?.email}`);
          return res.json();
        },
      });
    return [classes, loading, refetch]
};

export default useSelectedClasses;