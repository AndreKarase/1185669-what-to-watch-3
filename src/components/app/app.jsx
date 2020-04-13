import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import movies from '../../mocks/films.js';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      screen: `main`,
      index: 0
    };
  }

  _renderApp() {
    const {title, genre, releaseDate} = this.props;
    const {screen, index} = this.state;

    switch (screen) {
      case `main`:
        return (
          <Main
            title = {title}
            genre = {genre}
            releaseDate = {releaseDate}
            onHeaderClick = {(i) => {
              this.setState({
                screen: `details`,
                index: i
              });
            }}
          />
        );

      case `details`:
        return (
          <MovieDetails
            movie = {movies[index]}
          />
        );
    }

    return null;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-movie-details">
            <MovieDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired
};

export default (App);
