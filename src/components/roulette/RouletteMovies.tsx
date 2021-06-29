import React from "react";
import { useHistory } from "react-router";
import { MovieRoulette } from "./Roulette";
import "../scss/layout/_layout.scss";

export interface RouleteFormInfo {
  moviesByGenre: MovieRoulette;
  setGenre: any;
  routeChange: any;
}

export default function RouletteForm({
  setGenre,
  moviesByGenre,
  routeChange,
}: RouleteFormInfo) {
  const history = useHistory();
  return (
    <div className="wrapper">
      <div className="header" onClick={() => history.push("/")}>
        Movie API
      </div>
      <div className="section">
        <div>Search for the movies by genre:</div>
        <form>
          <label htmlFor="movie-genre">Movie genre</label>
          <select onChange={setGenre}>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="10751">Family</option>
            <option value="14">Fantasy</option>
            <option value="36">History</option>
            <option value="27">Horror</option>
            <option value="10402">Music</option>
            <option value="9648">Mystery</option>
            <option value="10749">Romance</option>
            <option value="878">Science Fiction</option>
            <option value="10770">TV Movie</option>
            <option value="53">Thriller</option>
            <option value="10752">War</option>
            <option value="37">Western</option>
          </select>
        </form>
        <div>
          <div>
            {moviesByGenre && moviesByGenre.results ? (
              <div>
                {moviesByGenre.results.slice(0, 6).map((item) => (
                  <div key={item.id}>
                    <div> {item.original_title} </div>
                    <div>{item.vote_average}</div>
                    <div>
                      <img
                        src={
                          `https://image.tmdb.org/t/p/w200` + item.poster_path
                        }
                        alt={item.title}
                      />
                      <div>{item.release_date?.substring(0, 4)}</div>
                      <h1>{item.original_title}</h1>
                      <div>Language: {item.original_language}</div>
                      <button onClick={() => routeChange(item.id)}>
                        More info
                      </button>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            ) : (
              <div>No results</div>
            )}
          </div>
        </div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
}
