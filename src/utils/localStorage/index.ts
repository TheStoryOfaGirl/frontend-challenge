import { ICatImage } from "types";

export const getFavoriteCatImages = () => {
  return JSON.parse(localStorage.getItem("favoriteCatImages") || '""') || [];
};

export const addFavoriteCatImage = ({
  url,
  id,
}: Pick<ICatImage, "id" | "url">) => {
  const updateFavoriteCatImages = JSON.stringify([
    ...getFavoriteCatImages(),
    { id, url },
  ]);
  localStorage.setItem("favoriteCatImages", updateFavoriteCatImages);
};

export const deleteFavoriteCatImage = ({ id }: Pick<ICatImage, "id">) => {
  const updateFavoriteCatImages = JSON.stringify(
    getFavoriteCatImages().filter(
      (image: Pick<ICatImage, "id" | "url">) => image.id !== id
    )
  );
  localStorage.setItem("favoriteCatImages", updateFavoriteCatImages);
};
