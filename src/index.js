import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const filmInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

const TITLES = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`
];

ReactDOM.render(
    <App
      title = {filmInfo.title}
      genre = {filmInfo.genre}
      releaseDate = {filmInfo.releaseDate}
      titles = {TITLES}
    />,
    document.querySelector(`#root`)
);
