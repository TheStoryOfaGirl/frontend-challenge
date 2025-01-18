import { ICatImage } from "./../../../types";
import { api, API_URL } from "../api";
import { LIMIT_CAT_IMAGES } from "./../../../const";

export const getCatImages = async ({ pageParam }: { pageParam: number }) => {
  const response = await api.get<ICatImage[]>(`${API_URL}/images/search`, {
    params: {
      page: pageParam,
      limit: LIMIT_CAT_IMAGES,
    },
  });

  return {
    data: response.data,
    nextPage: pageParam + 1,
  };
};
