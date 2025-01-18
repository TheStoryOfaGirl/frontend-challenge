import { CatImage, Header } from "@components";
import { getFavoriteCatImages } from "@utils";
import styles from "./FavoriteCats.module.css";
import { ICatImage } from "types";

export const FavoriteCats = () => {
  const favoriteCatImages = getFavoriteCatImages();
  return (
    <>
      <Header />
      <div className={styles.images}>
        {favoriteCatImages.map(({ id, url }: Pick<ICatImage, "id" | "url">) => (
          <div className={styles.row} key={id}>
            <CatImage id={id} url={url} />
          </div>
        ))}
      </div>
    </>
  );
};
