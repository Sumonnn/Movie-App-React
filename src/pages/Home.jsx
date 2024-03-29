import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/common/Navbar";
import axios from "../utils/axios";
import Header from "../components/dashboard/Header";

const Home = () => {
  // document.title = 'Su Mon | Homepage'

  const [wallpaper, setwallpaper] = useState(null);

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`);
      let random = data.results[Math.floor(Math.random()*data.results.length)];
      // console.log(random);
      setwallpaper(random);
    } catch (error) {
      console.log("Error :" + error);
    }
  };

  useEffect(() => {
    !wallpaper &&
    GetHeaderWallpaper();
  }, []);

  return wallpaper ? (
    <div className="w-full h-screen bg-[#1F1E24] flex">
      <Sidebar />

      <div className="w-[80%] h-full">
        <Navbar />
        <Header data={wallpaper}/>
      </div>
    </div>
  ): <p>Loading...</p>;
};

export default Home;
