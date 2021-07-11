import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import MovieList from "./MovieList";

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

  const getMovies = (page: number) => {
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
      .finally(() => {
        setLoading(false);
      });
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
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return response ? (
    <MovieList
      loadPrevious={loadPrevious}
      loadNext={loadNext}
      error={error}
      routeChange={routeChange}
      response={response}
      onBack={() => history.push("/roulette")}
    />
  ) : (
    <Error />
  );
}
