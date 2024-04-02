import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import DropDown from "../components/common/DropDown";
import Cards from "../components/dashboard/Cards";

const Tvshows = () => {
  document.title = "RJFGs | Tv-shows";
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tv, setTv] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetTvshows = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      console.log(data.results);

      if (data.results.length > 0) {
        setTv((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error :" + error);
    }
  };

  const refershHandler = () => {
    if (tv.length === 0) {
      GetTvshows();
    } else {
      setpage(1);
      setTv([]);
      GetTvshows();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return tv ? (
    <div className="w-screen h-screen">
      <div className="w-full p-[2%] flex items-center">
        <h1
          onClick={() => navigate(-1)}
          className="text-2xl w-[30vw] cursor-pointer flex items-center gap-2 font-semibold text-zinc-400"
        >
          <i className=" hover:text-[#6556CD] cursor-pointer ri-arrow-left-line"></i>{" "}
          TV-shows <small className="text-xs ml-2 text-zinc-600 mt-3">({category})</small>
        </h1>

        <Navbar />
        <DropDown
          title="Category"
          options={["on_the_air","popular","top_rated","airing_today"]}
          func={setCategory}
        />
        <div className="w-[2%]"></div>
        
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={GetTvshows}
        hasMore={hasMore}
        loader={<h1 className="text-center mt-10">Loading...</h1>}
      >
        <Cards data={tv} category={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Tvshows;
