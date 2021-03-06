import React, { useState, useEffect } from "react";
import axios from "../services/axios";
import "../css/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"

const baseImg_rl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  /** Snippet that run in specific condition */
  useEffect(() => {
    //if [] blanc , run once when the row loads.on page load
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      console.table(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  const handleClick =(movie)=>{
    if(trailerUrl){
      setTrailerUrl("")
    }else{
      movieTrailer(movie?.name || "")
      .then((url) =>{
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl (urlParams.get("v"));

      })
      .catch((error) => console.log(error));
    }
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={()=> handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseImg_rl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
      {trailerUrl &&
      <YouTube videoId={trailerUrl} opts={opts}/>
      }
    </div>
  );
}

export default Row;
