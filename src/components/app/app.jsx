import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import movies from '../../mocks/films.js';
import {ActionCreator} from '../../reducer.js';

const DETAILS_MAX_MOVIE_COUNT = 4;

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {title, genre, releaseDate, activeMovie, onMovieDetailsRender} = this.props;

    if (activeMovie) {
      onMovieDetailsRender();

      return (
        <MovieDetails
          movies={movies}
          movie={activeMovie}
        />
      );
    } else {
      return (
        <Main
          title = {title}
          genre = {genre}
          releaseDate = {releaseDate}
        />
      );
    }
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
  releaseDate: PropTypes.string.isRequired,
  activeMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }),
  onMovieDetailsRender: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeMovie: state.activeMovie
});

const mapDispatchToProps = (dispatch) => ({
  onMovieDetailsRender() {
    dispatch(ActionCreator.setMaxMovieCount(DETAILS_MAX_MOVIE_COUNT));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
