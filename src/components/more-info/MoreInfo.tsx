import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Loading from "../loading/Loading";
import Error from "../error/Error";

export interface MovieApi {
  genres: MovieGenre[];
  homepage: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export interface MovieGenre {
  name: string;
}

export default function MoreInfo() {
  const history = useHistory();
  const { movieId } = useParams<{ movieId: string }>();
  const { page } = useParams<{ page: string }>();
  const API_KEY = `${process.env.REACT_APP_API_KEY}`;

  const [movie, setMovie] = useState<MovieApi>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("movie is", json);
        setMovie(json);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  if (loading) {
    return Loading();
  }

  if (error) {
    return Error();
  }

  return (
    <div>
      <div>
        <div>{movie?.original_title}</div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200` + movie?.poster_path}
            alt={movie?.title}
          ></img>
        </div>
        <div>
          <a href={movie?.homepage}>{movie?.homepage}</a>
        </div>
        <div>{movie?.original_language}</div>
        <div>{movie?.overview}</div>
        <div>{movie?.release_date}</div>
        <div>{movie?.vote_average}</div>
        <div>{movie?.genres.map((item) => item.name)}</div>
      </div>

      <button onClick={() => history.push("/home")}>
        Return to the home page
      </button>
      <div></div>
    </div>
  );
}
