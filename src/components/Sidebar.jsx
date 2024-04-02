import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="w-[20%] h-full border-r-2 p-8">

      <div className="text-white font-bold text-xl">
        <Link to="/">
          <i className="text-[#6556CD] mr-2 ri-tv-fill"></i>RJFGs.
        </Link>
      </div>

      {/* Links */}

      <nav className=" flex flex-col gap-3 mt-8 text-zinc-400">

        <h2 className="text-white font-semibold text-xl">New Feeds</h2>
        
        <Link to="/trending" className="p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white text-lg">
        <i className="ri-fire-fill"></i>  Tranding
        </Link>

        <Link to="/popular" className="p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white text-lg">
        <i className="mr-2 ri-bard-fill"></i> Popular
        </Link>

        <Link to="/movie" className="p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white text-lg">
        <i className="mr-2 ri-movie-2-fill"></i> Movies
        </Link>

        <Link to="/tv-show" className="p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white text-lg">
        <i className="mr-2 ri-tv-2-fill"></i> Tv Shows
        </Link>

        <Link to="/people" className="p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white text-lg">
        <i className="mr-2 ri-team-fill"></i> People
        </Link>
      </nav>

      <hr  className=" mt-2"/>

      <nav className=" flex flex-col gap-3 mt-2 text-zinc-400">

      <h2 className="text-white font-semibold text-xl mt-2">Website Information</h2>

        <Link className="p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white text-lg">
        <i className="mr-2 ri-information-fill"></i> About Us
        </Link>

        <Link className="p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white text-lg">
        <i className="mr-2 ri-phone-fill"></i> Contact Us
        </Link>
        
      </nav>

    </div>
  );
};

export default Sidebar;
