import { useQuery } from "@tanstack/react-query";


const useInstuctors = () => {
    const { data: instructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["instructors"],
        queryFn: async () => {
          const res = await fetch("https://a12-summer-camp-school-server.vercel.app/instructors");
          return res.json();
        },
      });
    return [instructors, loading, refetch]
};

export default useInstuctors;