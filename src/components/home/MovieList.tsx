import React from "react";
import { IMovieApiPage, IMovieApiPopularResponse } from "./Movies";
import leftArrow from "../images/leftArrow.png";
import rightArrow from "../images/rightArrow.png";
import "./_home.scss";

export interface MovieListProps {
  response: IMovieApiPage<IMovieApiPopularResponse>;
  onBack: () => void;
  loadPrevious: () => void;
  loadNext: () => void;
  error: () => void;
  routeChange: (movieId: number) => void;
}

export default function MovieList({
  loadPrevious,
  loadNext,
  error,
  routeChange,
  response,
  onBack,
}: MovieListProps) {
  return (
    <div className="c-home__item form-control">
      <div className="header">
        <div>Movie API</div>
      </div>
      <div className="section">
        <div className="c-home__button__item">
          <button className="c-home__button" onClick={loadPrevious}>
            <img
              className="c-home__button__arrow-img"
              src={leftArrow}
              alt="leftArrow"
            ></img>
          </button>
        </div>
        {error && <div>{error}</div>}
        <div className="c-home__movies__item">
          {response?.results.slice(0, 6).map((item) => (
            <div
              onClick={() => routeChange(item.id)}
              className="c-home__movie__item"
              key={item.id}
            >
              <div className="c-home__movie__information__item informations">
                <div className="informations__vote__item">
                  <div className="informations__vote">{item.vote_average}</div>
                </div>
                <div className="informations__more__item">
                  <img
                    className="informations__more__img"
                    src={`https://image.tmdb.org/t/p/w200` + item.poster_path}
                    alt={item.title}
                  />

                  <div className="informations__more__about__item">
                    <div className="informations__more__about__title ">
                      {item.original_title}
                    </div>
                    <div className="informations__more__about__title__item ">
                      <span className="informations__more__about">
                        Release date:
                      </span>
                      <span>{item.release_date?.substring(0, 4)}</span>
                    </div>
                    <div>
                      <span className="informations__more__about">
                        Language:
                      </span>
                      <span>{item.original_language}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="c-home__button__item">
          <button className="c-home__button" onClick={loadNext}>
            <img
              className="c-home__button__arrow-img"
              src={rightArrow}
              alt="rightArrow"
            ></img>
          </button>
        </div>
      </div>
      <div className="footer">
        <button onClick={onBack} className="roulette-button">
          Roulette
        </button>
      </div>
    </div>
  );
}
