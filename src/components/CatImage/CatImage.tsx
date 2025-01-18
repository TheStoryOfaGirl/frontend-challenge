import { ICatImage } from "../../types";
import styles from "./CatImage.module.css";
import { useEffect, useState } from "react";
import {
  addFavoriteCatImage,
  classnames,
  deleteFavoriteCatImage,
  getFavoriteCatImages,
} from "@utils";

type CatImageProps = Pick<ICatImage, "id" | "url">;

export const CatImage = ({ id, url }: CatImageProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      addFavoriteCatImage({ id, url });
    } else {
      deleteFavoriteCatImage({ id });
    }
  };

  useEffect(() => {
    const favoriteCatImages = getFavoriteCatImages();
    const idFavoriteCatImage = favoriteCatImages.filter(
      (image: Pick<ICatImage, "id" | "url">) => image.id === id
    );

    if (idFavoriteCatImage.length !== 0) {
      setIsFavorite(true);
    }
  }, [id]);

  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src={url} />
        <div className={styles.gradient}></div>
        {!isFavorite && (
          <div
            className={classnames(styles.icon, styles.icon_default)}
            onClick={handleClick}
          ></div>
        )}
        {isFavorite && (
          <div
            className={classnames(styles.icon, styles.icon_clicked)}
            onClick={handleClick}
          ></div>
        )}
      </div>
    </>
  );
};
