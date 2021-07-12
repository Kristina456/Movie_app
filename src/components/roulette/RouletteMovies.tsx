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
    <div className="c-roulette__item form-control">
      <div className="header" onClick={() => history.push("/")}>
        Movie API
      </div>
      <div className="c-roulette__section__item section">
        <div className="c-roulette__section">
          <div className="c-roulette__section__form__item">
            <div className="c-roulette__section__form">
              <div>Search for the movies by genre:</div>
              <div className="c-roulette__section__form__select">
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
            </div>
          </div>

          <div>
            {moviesByGenre && moviesByGenre.results ? (
              <div className="c-roulette__section__movie-result__item">
                {moviesByGenre.results.slice(0, 6).map((item) => (
                  <div
                    onClick={() => routeChange(item.id)}
                    className="c-roulette__section__movie-result"
                    key={item.id}
                  >
                    <div className="c-roulette__section__movie-result__information__item c-roulette__movie">
                      <div className="c-roulette__movie__vote__item">
                        <div>{item.vote_average}</div>
                      </div>

                      <div className="c-roulette__movie__informations__item">
                        <img
                          className="c-roulette__movie__informations__img"
                          src={
                            `https://image.tmdb.org/t/p/w200` + item.poster_path
                          }
                          alt={item.title}
                        />

                        <div className="c-roulette__movie__informations">
                          <div className="c-roulette__movie__informations__title ">
                            {item.original_title}
                          </div>
                          <div className="c-roulette__movie__informations__info">
                            <div>
                              <span className="c-roulette__movie__informations__style">Release date:</span>
                              <span>{item.release_date?.substring(0, 4)}</span>
                            </div>
                            <div>
                              <span className="c-roulette__movie__informations__style">Language:</span>
                              <span>{item.original_language}</span>
                            </div>
                          </div>
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
