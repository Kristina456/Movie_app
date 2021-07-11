import React from "react";
import { MovieApi } from "./MoreInfo";
import "./_more-info.scss";

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
      <div className="c-more_header header" onClick={onBack}>
        Movie API
      </div>
      <div className=" c-more_section section">
        <div className="c-more__section__item">
          <div className="c-more__section__movie-card">
            <div className="c-more__section__movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/w200` + movie.poster_path}
                alt={movie.title}
              ></img>
            </div>
            <div className="c-more__section__informations informations">
              <div>
                <div
                  className="informations__card-title"
                  style={{ fontWeight: `bold` }}
                >
                  {movie.original_title}
                </div>
                <div className="informations__card-info">
                  <div className="informations__card-info__item">
                    <span className="informations__card-info__about">Original language: </span>
                    <span>{movie.original_language}</span>
                  </div>
                  <div className="informations__card-info__item">
                    <div className="informations__card-info__about">Movie overview:</div>
                    <div style={{ lineHeight: "1.5" }}>{movie.overview}</div>
                  </div>
                  <div className="informations__card-info__item">
                    <span className="informations__card-info__about">Release date: </span>
                    <span>{movie.release_date}</span>
                  </div>
                  <div className="informations__card-info__item">
                    <span className="informations__card-info__about">Movie vote average:</span>
                    <span>{movie.vote_average}</span>
                  </div>
                  <div className="informations__card-info__item">
                    <span className="informations__card-info__about"> Movie genres:</span>
                    <span>
                      {movie.genres.map((item) => (
                        <span>{item.name} </span>
                      ))}
                    </span>
                  </div>
                  <div className="informations__card-info__item">
                    <span className="informations__card-info__about">Homepage:</span>
                    <span>
                      <a className="movie-homepage" href={movie.homepage}>
                        {movie.homepage}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="c-more_footer footer ">
        <button className="roulette-button" onClick={onRoulette}>
          Roulette
        </button>
      </div>
    </div>
  );
}
