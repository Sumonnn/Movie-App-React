import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
   
    const [readmore,setreadmore] = useState(true);
    const description = readmore ? data.overview.substring(0,120) : data.overview;

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        backgroundPosition: "10% 15%",
        backgroundSize: "cover",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start gap-3 p-[5%]"
    >
      <h1 className="text-5xl w-[70%] font-black text-white">
        {
            data.title || 
            data.original_title || 
            data.name || 
            data.original_name
        }
      </h1>
      <p className="w-[50%]">

           {description+""}
           <span className="text-blue-400 cursor-pointer hover:text-zinc-100" onClick={()=>{ setreadmore(!readmore) }}>{readmore?'... Read More':' Show less'}</span>
        
      </p>
      <p className="text-white">
        <i className="text-yellow-500 ri-megaphone-fill"></i> {data.release_date || "No Information"}
        <i className="text-yellow-500 ml-5 ri-album-fill"></i> {data.media_type.toUpperCase()}
      </p>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="p-3 bg-[#6556CD] rounded font-semibold">Watch Trailer</Link>
    </div>
  );
};

export default Header;
