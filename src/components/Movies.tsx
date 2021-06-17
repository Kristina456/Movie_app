import React, { useEffect, useState } from "react";

export interface IMovieApiPage<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface IMovieApiPopularResponse {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function Movies() {
  const [response, setResponse] =
    useState<IMovieApiPage<IMovieApiPopularResponse>>();

  const API_KEY = `${process.env.REACT_APP_API_KEY}`;
  const random = Math.floor(Math.random() * 100) + 1;

  const getMovies = function () {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${random}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("Movie api response", json);
        const result: IMovieApiPage<IMovieApiPopularResponse> = json;
        setResponse(result);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (response) {
      return;
    }

    getMovies();
  }, [response]);

  return (
    <div>
      <hr />
      <h1>Movie list</h1>
      <hr />
      {response?.results.map((item) => (
        <div key={item.id}>
          <div>{item.vote_average}</div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200` + item.poster_path}
              alt={item.title}
            />
          </div>
          <h1>
            {item.original_title}
            {item.release_date?.substring(0, 4)}
          </h1>
          <div>Language: {item.original_language}</div>
        </div>
      ))}
    </div>
  );
}
