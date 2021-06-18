import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { setConstantValue } from "typescript";
import "./Movies.scss";

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

const API_KEY = `${process.env.REACT_APP_API_KEY}`;
// const random = Math.floor(Math.random() * 440) + 1;

export default function Movies() {
  const [response, setResponse] =
    useState<IMovieApiPage<IMovieApiPopularResponse>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (response) {
      return;
    }
    getMovies(1);
  }, [response]);

  const history = useHistory();

  const routeChange = (movieId: number) => {
    let path = `/moreInfo/${movieId}`;
    history.push(path);
  };

  const getMovies = function (page: number) {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("Movie api response", json);
        const result: IMovieApiPage<IMovieApiPopularResponse> = json;
        setResponse(result);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const loadNext = function () {
    if (response) {
      getMovies(response.page + 1);
    }
  };

  const loadPrevious = function () {
    if (response && response.page > 1) {
      getMovies(response.page - 1);
    }
  };

  if (loading) {
    return <div>Loading page</div>;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div>
      <hr />
      <h1>Movie list</h1>
      <button onClick={loadPrevious}>Previous Page</button>
      <button onClick={loadNext}>Next Page</button>
      <hr />
      {error && <div>{error}</div>}
      {response?.results.slice(0, 6).map((item) => (
        <div className="wrapper" key={item.id}>
          <div>{item.vote_average}</div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200` + item.poster_path}
              alt={item.title}
            />
          </div>
          <div>{item.release_date?.substring(0, 4)}</div>
          <h1>{item.original_title}</h1>
          <div>Language: {item.original_language}</div>
          <button onClick={() => routeChange(item.id)}> More info</button>
        </div>
      ))}
    </div>
  );
}
