import { Main } from "@pages/Main/Main";
import { URLS } from "./const";
import { HashRouter, Route, Routes } from "react-router-dom";
import { FavoriteCats } from "@pages/FavoriteCats/FavoriteCats";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={URLS.MAIN} element={<Main />} />
        <Route path={URLS.FAVORITE_CATS} element={<FavoriteCats />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
