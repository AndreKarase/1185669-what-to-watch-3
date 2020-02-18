import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import movies from './mocks/films.js';

const filmInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

ReactDOM.render(
    <App
      title = {filmInfo.title}
      genre = {filmInfo.genre}
      releaseDate = {filmInfo.releaseDate}
      movies = {movies}
    />,
    document.querySelector(`#root`)
);
