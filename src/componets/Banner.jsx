import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../css/Banner.css";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  // Fetch a random movie from the given URL when the component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
      } catch (error) {
        console.error("Failed to fetch banner data:", error);
      }
    }

    fetchData();
  }, [fetchUrl]);

  // Truncate the movie description to a specified number of characters
  function truncate(string, number_of_characters) {
    return string?.length > number_of_characters
      ? string.substr(0, number_of_characters - 1) + "..."
      : string;
  }

  return (
    <header
      className="main_container"
      style={{
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
      }}
    >
      <div className="banner">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <p className="banner_description">{truncate(movie?.overview, 150)}</p>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
