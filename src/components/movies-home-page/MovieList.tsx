import React from "react";
import { IMovieApiPage, IMovieApiPopularResponse } from "./Movies";
import "./_movie-list.scss";
import leftArrow from "../images/leftArrow.png";
import rightArrow from "../images/rightArrow.png";

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
    <div className="c-home-item form-control">
      <div className="header">
        <div>Movie API</div>
      </div>
      <div className="section">
        <div className="c-home_button">
          <button className="arrow-item" onClick={loadPrevious}>
            <img className="arrow" src={leftArrow} alt="leftArrow"></img>
          </button>
        </div>
        {error && <div>{error}</div>}
        <div className="c-home_section_result">
          {response?.results.slice(0, 6).map((item) => (
            <div
              onClick={() => routeChange(item.id)}
              className="c-home_section_result_movie"
              key={item.id}
            >
              <div className="c-home_section_result_movie_vote-average">
                <div className="vote-result">{item.vote_average}</div>
              </div>
              <div className="nesto">
                <img
                  className="c-home_section_result_img"
                  src={`https://image.tmdb.org/t/p/w200` + item.poster_path}
                  alt={item.title}
                />

                <div>{item.release_date?.substring(0, 4)}</div>
                <h1>{item.original_title}</h1>
                <div>Language: {item.original_language}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="c-home_button">
          <button className="arrow-item" onClick={loadNext}>
            <img className="arrow" src={rightArrow} alt="rightArrow"></img>
          </button>
        </div>
      </div>
      <div className="footer">
        <button onClick={onBack}>Roulette</button>
      </div>
    </div>
  );
}
