import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Popular from "./pages/Popular";
import Movie from "./pages/Movie";
import Tvshows from "./pages/Tvshows";
import People from "./pages/People";
import Moviedetails from "./pages/Moviedetails";
import Persondetails from "./pages/Persondetails";
import Tvdetails from "./pages/Tvdetails";
import Trailer from "./pages/Trailer";
import NotFound from "./components/common/NotFound";

const App = () => {
  return (
    <div className="w-screen h-screen text-white bg-[#1F1E24]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<Tvdetails />} >
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/people" element={<People />} />
        <Route path="/person/details/:id" element={<Persondetails />} />
        <Route path="/movie/details/:id/trailer" element={<Trailer />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
