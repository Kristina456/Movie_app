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
    <div className="c-roulette_item form-control">
      <div
        className="c-roulette_header header"
        onClick={() => history.push("/")}
      >
        Movie API
      </div>
      <div className="c-roulette_section section">
        <div className="nesto_nov">
          <div className="c-roulette_section_form">
            <div className="c-roulette_section_form_naming">
              Search for the movies by genre:{" "}
            </div>
            <form>
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
          </div>

          <div>
            {moviesByGenre && moviesByGenre.results ? (
              <div className="c-roulette_section_result">
                {moviesByGenre.results.slice(0, 6).map((item) => (
                  <div onClick={() => routeChange(item.id)}>
                    <div key={item.id}>
                      <div className="c-roulette_section_result_vote-average">
                        <div className="c-roulette_vote-result">
                          <div className="c-roulette_vote-result_number">
                            {item.vote_average}
                          </div>
                        </div>
                      </div>
                      <div className="c-roulette_section_result_movie">
                        <div>
                          <img
                            className="c-roulette_section_result_movie_img"
                            src={
                              `https://image.tmdb.org/t/p/w200` +
                              item.poster_path
                            }
                            alt={item.title}
                          />
                          <div> {item.original_title} </div>
                          <div>{item.release_date?.substring(0, 4)}</div>
                          <h1>{item.original_title}</h1>
                          <div>Language: {item.original_language}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>No results</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
