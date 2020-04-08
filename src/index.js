import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import {reducer} from './reducer.js';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const filmInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

ReactDOM.render(
    <Provider
      store = {store}
    >
      <App
        title = {filmInfo.title}
        genre = {filmInfo.genre}
        releaseDate = {filmInfo.releaseDate}
      />
    </Provider>,
    document.querySelector(`#root`)
);
