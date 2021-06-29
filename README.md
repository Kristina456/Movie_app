<p align="center">
<img src="./gitHub-images/CodingInProgress.jpg" width="400" height="auto" >
</p>

# Movie API

Movie API is still in progres :)

## Technologies

Project is created with:

- React JS 17.0.2
- The movie database (TMDb)

## Connect to TMDb

You can create your TMDb account for free using this [link](https://www.themoviedb.org/signup).\
To connect to the TMDb you need to paste your key in Movies.tsx, MoreInfo.tsx and Roulette.tsx component,
or with .env file with environment variable REACT_APP_API_KEY.

```javascript
const API_KEY = `${process.env.REACT_APP_API_KEY}`;


const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;

```

## Installation

Install it locally using npm:

```
$ nmp install
$ npm start
```
