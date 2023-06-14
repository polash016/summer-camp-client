import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
    const { data: classes = [], refetch, isLoading: loading } = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
          const res = await fetch("https://a12-summer-camp-school-server.vercel.app/classes");
          return res.json();
        },
      });
    return [classes, loading, refetch]
};

export default useClasses;