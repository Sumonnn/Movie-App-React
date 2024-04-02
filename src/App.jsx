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

const App = () => {
  return (
    <div className="w-screen h-screen text-white bg-[#1F1E24]">


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />} />
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<Tvdetails />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/details/:id" element={<Persondetails />} />
      </Routes>
    </div>
  );
};

export default App;
