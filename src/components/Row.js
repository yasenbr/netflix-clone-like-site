import React, { useState, useEffect } from "react";
import axios from "../services/axios";
import "../css/Row.css";

const baseImg_rl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  /** Snippet that run in specific condition */
  useEffect(() => {
    //if [] blanc , run once when the row loads.on page load
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.table(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${baseImg_rl}${movie.poster_path}`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;
