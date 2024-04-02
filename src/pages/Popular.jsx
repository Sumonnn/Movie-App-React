import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Cards from "../components/dashboard/Cards";
import DropDown from "../components/common/DropDown";
import Navbar from "../components/common/Navbar";
import Loading from "../components/common/Loading";

const Popular = () => {
  document.title = "RJFGs | Popular";
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);

      if (data.results.length > 0) {
        setPopular((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }

    } catch (error) {
      console.log("Error :" + error);
    }
  };

  const refershHandler = () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setpage(1);
      setPopular([]);
      GetPopular();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return popular ? (
    <div className="w-screen h-screen">
      <div className="w-full p-[2%] flex items-center">
        <h1
          onClick={() => navigate(-1)}
          className="text-2xl cursor-pointer flex items-center gap-2 font-semibold text-zinc-400"
        >
          <i className=" hover:text-[#6556CD] cursor-pointer ri-arrow-left-line"></i>{" "}
          Popular
        </h1>

        <Navbar />
        <DropDown
          title="Category"
          options={["movie", "tv"]}
          func={setCategory}
        />
        <div className="w-[2%]"></div>
        
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasMore}
        loader={<h1 className="text-center mt-10">Loading...</h1>}
      >
        <Cards data={popular} category={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
