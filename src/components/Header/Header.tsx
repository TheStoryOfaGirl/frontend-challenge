import { URLS } from "./../../const";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { classnames } from "@utils";
import { InfiniteData } from "@tanstack/react-query";
import { ICatImage } from "types";
import { queryClient } from "./../../main";

export const Header = () => {
  const location = useLocation();
  const activeNav = location.pathname;
  const stylesNavMain = classnames(styles.nav_main, {
    [styles.nav_active]: activeNav === URLS.MAIN,
  });
  const stylesNavFavoriteCats = classnames(styles.nav_favorite_cats, {
    [styles.nav_active]: activeNav === URLS.FAVORITE_CATS,
  });

  const handleClick = () => {
    queryClient.setQueryData(
      ["catImages"],
      (
        data: InfiniteData<
          {
            data: ICatImage[];
            nextPage: number;
          },
          unknown
        >
      ) => ({
        pages: data?.pages.slice(0, 1),
        pageParams: data?.pageParams.slice(0, 1),
      })
    );
  };
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link className={stylesNavMain} to={URLS.MAIN}>
            Все котики
          </Link>
          <Link
            className={stylesNavFavoriteCats}
            to={URLS.FAVORITE_CATS}
            onClick={handleClick}
          >
            Любимые котики
          </Link>
        </nav>
      </div>
    </>
  );
};
