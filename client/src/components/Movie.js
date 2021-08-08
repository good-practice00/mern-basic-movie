import React, { useEffect, useState } from "react";
import axios from "axios";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    year: "",
  });

  const fetchMovies = async () => {
    const res = await fetch("/movies");
    console.log(res);
    const data = await res.json();
    console.log(data);
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const deleteItem = (id) => {
    axios.delete("/movies/" + id);
  };

  const addMovie = (e) => {
    e.preventDefault();
    const newMovie = {
      title: movie.title,
      genre: movie.genre,
      year: movie.year,
    };

    axios.post("/movies", newMovie);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMovie((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          value={movie.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="genre"
          value={movie.genre}
          placeholder="Genre"
          onChange={handleChange}
        />
        <input
          type="text"
          name="year"
          value={movie.year}
          placeholder="Year"
          onChange={handleChange}
        />
        <button onClick={addMovie}>Add Movie</button>
      </form>
      <div style={{ border: "3px solid red", display: "flex" }}>
        {movies.map((movie) => {
          return (
            <div style={{ border: "1px solid blue" }}>
              <h4>Title: {movie.title}</h4>
              <h4>Genre: {movie.genre}</h4>
              <h4>Year: {movie.year}</h4>
              <button
                onClick={() => {
                  deleteItem(movie._id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movie;
