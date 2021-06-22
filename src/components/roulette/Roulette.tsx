import userEvent from "@testing-library/user-event";
import { randomBytes } from "crypto";
import React, { useEffect, useState } from "react";
import { isTemplateExpression } from "typescript";
import { resourceLimits } from "worker_threads";
import { useHistory, useParams } from "react-router";

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
  const [genre, setGenre] = useState<any>(false);
  const [moviesByGenre, setMoviesByGenre] = useState<MovieRoulette>();

  const random = Math.floor(Math.random() * 10);
  const history = useHistory();

  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=${random}`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        console.log("List is", json);
        setMoviesByGenre(json);
      });
  }, [genre]);

  return (
    <div>
      <div>Search for the movies by genre:</div>
      <form action="">
        <label htmlFor="movie-genre">Movie genre</label>
        <select onChange={(e) => setGenre(e.target.value)}>
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
      <div>
        {moviesByGenre && (
          <div>
            {moviesByGenre.results.slice(0, 6).map((item) => (
              <div>{item.original_title}</div>
            ))}
          </div>
        )}
      </div>
      <button onClick={() => history.push("/home")}>Return home</button>
    </div>
  );
}
