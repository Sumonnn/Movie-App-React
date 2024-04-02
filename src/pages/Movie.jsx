import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import DropDown from "../components/common/DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "../components/dashboard/Cards";
import Loading from "../components/common/Loading";


const Movie = () => {
  document.title = "RJFGs | Movie";
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);

      if (data.results.length > 0) {
        setMovie((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error :" + error);
    }
  };

  const refershHandler = () => {
    if (movie.length === 0) {
      GetMovies();
    } else {
      setpage(1);
      setMovie([]);
      GetMovies();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return movie ? (
    <div className="w-screen h-screen">
      <div className="w-full p-[2%] flex items-center">
        <h1
          onClick={() => navigate(-1)}
          className="text-2xl w-[30vw] cursor-pointer flex items-center gap-2 font-semibold text-zinc-400"
        >
          <i className=" hover:text-[#6556CD] cursor-pointer ri-arrow-left-line"></i>{" "}
          Movies <small className="text-xs ml-2 text-zinc-600 mt-3">({category})</small>
        </h1>

        <Navbar />
        <DropDown
          title="Category"
          options={["popular","top_rated","upcoming","now_playing"]}
          func={setCategory}
        />
        <div className="w-[2%]"></div>
        
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovies}
        hasMore={hasMore}
        loader={<h1 className="text-center mt-10">Loading...</h1>}
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movie;
