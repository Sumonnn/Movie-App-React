import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/common/Navbar";
import axios from "../utils/axios";
import Header from "../components/dashboard/Header";
import HorizontalCards from "../components/common/HorizontalCards";
import DropDown from "../components/common/DropDown";

const Home = () => {
  // document.title = 'Su Mon | Homepage'

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`);
      let random =
        data.results[Math.floor(Math.random() * data.results.length)];
      // console.log(random);
      setwallpaper(random);
    } catch (error) {
      console.log("Error :" + error);
    }
  };

  const GetTrendings = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/day`);
      console.log("all results" + data.results);
      setTrending(data.results);
    } catch (error) {
      console.log("Error :" + error);
    }
  };

  useEffect(() => {
    GetTrendings();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <div className="w-full h-screen bg-[#1F1E24] flex">
      <Sidebar />

      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Navbar />
        <Header data={wallpaper} />

        <div className="p-4 flex justify-between gap-5 items-center">
          <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>

          <DropDown setCategory={setCategory} title="Filter" options={["all", "tv", "movie"]} />
        </div>

        <HorizontalCards data={trending} />
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Home;
