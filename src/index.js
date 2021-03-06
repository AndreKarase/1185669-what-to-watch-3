import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/app/app.jsx';
import reducer from './reducer/reducer.js';
import {createAPI} from './api.js';
import {Operation as DataOperation} from './reducer/data/data.js';
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from './reducer/user/user.js';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requiredAutorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadMovies());
store.dispatch(UserOperation.checkAuth());

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
