import { Header, CatImage } from "@components";
import { useGetCatImagesQuery } from "@utils";
import { useEffect } from "react";
import styles from "./Main.module.css";
import { ICatImage } from "types";

export const Main = () => {
  const { data, fetchNextPage, isFetchingNextPage, isLoading } =
    useGetCatImagesQuery();

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 0.5 &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      {isLoading ? (
        <div></div>
      ) : (
        <>
          <div className={styles.container}>
            <Header />
            <div className={styles.images}>
              {data?.pages.map((group, i) => (
                <div className={styles.row} key={i}>
                  {group.data.map(({ id, url }: ICatImage) => (
                    <CatImage id={id} url={url} key={id} />
                  ))}
                </div>
              ))}
            </div>
            <div className={styles.loading}>
              {isFetchingNextPage && "... загружаем еще котиков ..."}
            </div>
          </div>
        </>
      )}
    </>
  );
};
