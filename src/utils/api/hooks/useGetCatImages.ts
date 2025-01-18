import { useInfiniteQuery } from "@tanstack/react-query";
import { getCatImages } from "../requests/getCats";

export const useGetCatImagesQuery = () =>
  useInfiniteQuery({
    queryKey: ["catImages"],
    queryFn: getCatImages,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage;
    },
  });
