import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import DropDown from "../components/common/DropDown";
import axios from "../utils/axios";
import Loading from "../components/common/Loading";
import Cards from "../components/dashboard/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  document.title = "RJFGs | Trending";
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetTrendings = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/${duration}?page=${page}`);
      if (data.results.length > 0) {
        setTrending((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error :" + error);
    }
  };

  const refershHandler = () => {
    if (trending.length === 0) {
      GetTrendings();
    } else {
      setpage(1);
      setTrending([]);
      GetTrendings();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category, duration]);

  return trending ? (
    <div className="w-screen h-screen">
      <div className="w-full p-[2%] flex items-center">
        <h1
          onClick={() => navigate(-1)}
          className="text-2xl cursor-pointer flex items-center gap-2 font-semibold text-zinc-400"
        >
          <i className=" hover:text-[#6556CD] cursor-pointer ri-arrow-left-line"></i>{" "}
          Trending
        </h1>

        <Navbar />
        <DropDown
          title="Category"
          options={["all", "movie", "tv"]}
          func={setCategory}
        />
        <div className="w-[2%]"></div>
        <DropDown
          title="Duration"
          options={["day", "week"]}
          func={setDuration}
        />
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrendings}
        hasMore={hasMore}
        loader={<h1 className="text-center mt-10">Loading...</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
