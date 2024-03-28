import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzMzYTg1YjAyM2RlMzJmYmJiYzI2ZjQxMjg5OWViZiIsInN1YiI6IjY2MDVhMjA1ZmNlYzJlMDE4NmM1MzlhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPaeP3_I5JJiRpUWCbSPiPQ17ZbVbtdfkTsBXzo23Ak",
  },
});


export default instance;