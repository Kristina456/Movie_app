import React from "react";
import { MovieApi } from "./MoreInfo";
import "../scss/pages/_more-info.scss";

export interface MovieInformationProps {
  movie: MovieApi;
  onBack: () => void;
  onRoulette: () => void;
}

export default function MovieInformation({
  movie,
  onBack,
  onRoulette,
}: MovieInformationProps) {
  return (
    <div className="form-control c-more-item">
      <div className="header" onClick={onBack}>
        Movie API
      </div>
      <div className="section">
        <div>
          <div>{movie.original_title}</div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200` + movie.poster_path}
              alt={movie.title}
            ></img>
          </div>
          <div>
            <a href={movie.homepage}>{movie.homepage}</a>
          </div>
          <div>{movie.original_language}</div>
          <div>{movie.overview}</div>
          <div>{movie.release_date}</div>
          <div>{movie.vote_average}</div>
          <div>{movie.genres.map((item) => item.name)}</div>
        </div>
      </div>

      <div className="footer">
        <button className="roulette-button" onClick={onRoulette}>
          Roulette
        </button>
      </div>
    </div>
  );
}
