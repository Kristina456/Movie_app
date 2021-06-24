import React from "react";
import { useHistory } from "react-router";
import { MovieRoulette } from "./Roulette";

export interface ReouletteMovieCardsInfo {
  moviesByGenre: MovieRoulette;
}

export default function RouleteMovieCards({
  moviesByGenre,
}: ReouletteMovieCardsInfo) {
  const history = useHistory();
  const routeChange = (movieId: number) => {
    let path = `/moreInfo/${movieId}`;
    history.push(path);
  };
  return (
    <div>
      {moviesByGenre && moviesByGenre.results ? (
        <div>
          {moviesByGenre.results.slice(0, 6).map((item) => (
            <div key={item.id}>
              <div> {item.original_title} </div>
              <div>{item.vote_average}</div>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w200` + item.poster_path}
                  alt={item.title}
                />
                <div>{item.release_date?.substring(0, 4)}</div>
                <h1>{item.original_title}</h1>
                <div>Language: {item.original_language}</div>
                <button onClick={() => routeChange(item.id)}>More info</button>
              </div>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <div>No results</div>
      )}
    </div>
  );
}
