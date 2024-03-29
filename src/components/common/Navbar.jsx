import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/Nophoto.jpg";

const Navbar = () => {
  const [query, setquery] = useState("");
  const [searchs, setSearchs] = useState(null);

  const GetSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      console.log(data);
      setSearchs(data.results);
    } catch (error) {
      console.log("Error :" + error);
    }
  };

  useEffect(() => {
    GetSearch();
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] relative flex items-center justify-start ml-[15%]">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>

      <input
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        onChange={(e) => setquery(e.target.value)}
        value={query}
        placeholder="search anything..."
      />

      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="cursor-pointer text-3xl text-zinc-400 ri-close-line"
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] overflow-auto rounded left-[5%]">
        {searchs &&
          searchs.map((s, i) => (
            <Link
              key={i}
              className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] flex justify-start p-10 items-center border-b-2 border-zinc-100"
            >
              <img 
              className="w-[10vh] h-[10vh] object-cover mr-5 rounded-full shadow"
              src={
                s.backdrop_path || s.profile_path ?
                `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` :
                 noimage
                } alt="" />
              <span>
                {s.title || s.original_title || s.name || s.original_name}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
