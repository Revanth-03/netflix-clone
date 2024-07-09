import React, { useEffect, useState } from "react";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "../css/Row.css";

function Row({ title, fetchUrl, isLarger }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  // Fetch movies data when the component mounts or fetchUrl changes
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Failed to fetch row data:", error);
      }
    }

    fetchData();
  }, [fetchUrl]);

  // Handle movie click to play the trailer
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          } else {
            console.log("No trailer found for this movie");
          }
        })
        .catch((err) => console.log("Error finding movie trailer:", err));
    }
  };

  const options = {
    width: "100%",
    height: "500",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_container">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLarger && "row_poster_larger"}`}
            src={`${baseUrl}${
              isLarger ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title || movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={options} />}
    </div>
  );
}

export default Row;
