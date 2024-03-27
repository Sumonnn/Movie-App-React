import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-full border-r-2 p-8">

      <div className="text-white font-bold text-xl">
        <h1>
          <i class="text-[#6556CD] mr-2 ri-tv-fill"></i>RJFGs.
        </h1>
      </div>

      {/* Links */}

      <nav className=" flex flex-col gap-3 mt-8 text-zinc-400">

        <h2 className="text-white font-semibold text-xl">New Feeds</h2>
        
        <Link className="p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white text-lg">
        <i class="ri-fire-fill"></i>  Tranding
        </Link>

        <Link className="p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white text-lg">
        <i class="mr-2 ri-bard-fill"></i> Popular
        </Link>

        <Link className="p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white text-lg">
        <i class="mr-2 ri-movie-2-fill"></i> Movies
        </Link>

        <Link className="p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white text-lg">
        <i class="mr-2 ri-tv-2-fill"></i> Tv Shows
        </Link>

        <Link className="p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white text-lg">
        <i class="mr-2 ri-team-fill"></i> People
        </Link>
      </nav>

      <hr  className=" mt-2"/>

      <nav className=" flex flex-col gap-3 mt-2 text-zinc-400">

      <h2 className="text-white font-semibold text-xl mt-2">Website Information</h2>

        <Link className="p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white text-lg">
        <i class="mr-2 ri-information-fill"></i> About Us
        </Link>

        <Link className="p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white text-lg">
        <i class="mr-2 ri-phone-fill"></i> Contact Us
        </Link>
        
      </nav>

    </div>
  );
};

export default Sidebar;
