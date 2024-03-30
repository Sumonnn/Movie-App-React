import React, { useState } from "react";
import DropDown from "./DropDown";

const HorizontalCards = ({ data }) => {
  return (
      <div className="w-[100%] h-[40vh] ml-1 flex overflow-y-hidden">
        {data.map((d, i) => (
          <div
            key={i}
            className="min-w-[15%] rounded duration-300 shadow hover:rounded-none overflow-hidden h-full mr-5 bg-zinc-900"
          >
            <img
              className="w=full cursor-pointer h-[55%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />

            <div className="text-white h-[45%] p-1">
              <h1 className="text-xl font-semibold mt-3">
                {d.title || d.original_title || d.name || d.original_name}
              </h1>

              <p className="mt-2 mb-3">
                {d.overview.substring(0, 30)}
                <span className="text-zinc-500 cursor-pointer">
                  ... More
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
  );
};

export default HorizontalCards;
