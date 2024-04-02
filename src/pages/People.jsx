import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import DropDown from "../components/common/DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "../components/dashboard/Cards";
import Loading from "../components/common/Loading";

const People = () => {
  document.title = "RJFGs | People";
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [person, setPerson] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);

      if (data.results.length > 0) {
        setPerson((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error :" + error);
    }
  };

  const refershHandler = () => {
    if (person.length === 0) {
      GetPerson();
    } else {
      setpage(1);
      setPerson([]);
      GetPerson();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return person ? (
    <div className="w-screen h-screen">
      <div className="w-full p-[2%] flex justify-center items-center">
        <h1
          onClick={() => navigate(-1)}
          className="text-2xl w-[30vw] cursor-pointer flex items-center gap-2 font-semibold text-zinc-400"
        >
          <i className=" hover:text-[#6556CD] cursor-pointer ri-arrow-left-line"></i>{" "}
          Peoples
        </h1>

        <Navbar />
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={GetPerson}
        hasMore={hasMore}
        loader={<h1 className="text-center mt-10">Loading...</h1>}
      >
        <Cards data={person} category={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
