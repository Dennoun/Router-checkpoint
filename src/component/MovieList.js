import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

function MovieList({ movies }) {
  
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`}>
          <MovieCard
            key={movie.id}
            movieKey={movie.id}
            movieTitle={movie.title}
            movieDescription={movie.bio}
            movieImg={movie.img}
            movieRating={movie.stars}
          />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
