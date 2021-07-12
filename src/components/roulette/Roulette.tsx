import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import RouletteMovies from "./RouletteMovies";

export interface MovieRoulette {
  page: number;
  results: MovieRouletteInfo[];
}

export interface MovieRouletteInfo {
  id: number;
  original_title: string;
  backdrop_path: string;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function Roulette() {
  const API_KEY = `${process.env.REACT_APP_API_KEY}`;
  const [genre, setGenre] = useState(false);
  const [moviesByGenre, setMoviesByGenre] = useState<MovieRoulette>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const random = () => {
    const min = 1;
    const max = 10;
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    setLoading(true);
    const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=${random()}`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        console.log("List is", json);
        setMoviesByGenre(json);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, [genre]);

  if (loading) {
    <Loading />;
  }

  if (error) {
    <Error />;
  }
  const history = useHistory();
  const routeChange = (movieId: number) => {
    let path = `/moreInfo/${movieId}`;
    history.push(path);
  };

  return moviesByGenre ? (
    <RouletteMovies
      setGenre={(e: { target: { value: any } }) => setGenre(e.target.value)}
      moviesByGenre={moviesByGenre}
      routeChange={routeChange}
    />
  ) : (
    <Loading />
  );
}
