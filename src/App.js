import "./App.css";
import MovieList from "./component/MovieList";
import moviesData from "./moviesData";
import AddMovie from "./component/AddMovie";
import MovieTrailer from "./component/MovieTrailer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <NavBar />

      <div className="App flex flex-wrap justify-center">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MovieList movies={movies} />
              </>
            }
          />
          <Route
            path="/addMovie"
            element={
              <>
                <AddMovie onAddMovie={addMovie} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieTrailer movies={movies} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
