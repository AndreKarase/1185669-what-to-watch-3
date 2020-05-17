import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import movies from '../../mocks/films.js';
import Player from '../video-player/video-player.jsx';
import {ActionCreator} from '../../reducer.js';
import {Screen} from '../../const.js';
import withVideo from '../../hocs/with-video/with-video.js';

const VideoPlayer = withVideo(Player);

class App extends PureComponent {
  _renderApp() {
    const {title, genre, releaseDate, activeMovie, activeScreen, previosScreen, setActiveScreen} = this.props;

    switch (activeScreen) {
      case Screen.FILM:
        return (
          <MovieDetails
            movies={movies}
            movie={activeMovie}
          />
        );

      case Screen.MAIN:
        return (
          <Main
            title = {title}
            genre = {genre}
            releaseDate = {releaseDate}
          />
        );

      case Screen.PLAYER:
        return (
          <VideoPlayer
            src={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
            title={`Transpotting`}
            poster={`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`}
            isPlaying={true}
            isPreview={false}
            muted={false}
            onCloseButtonClick={() => setActiveScreen(previosScreen)}
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
            <MovieDetails
              movies={movies}
              movie={movies[0]}
            />
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
  activeScreen: PropTypes.string.isRequired,
  previosScreen: PropTypes.string.isRequired,
  setActiveScreen: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeScreen: state.activeScreen,
  previosScreen: state.previosScreen,
  activeMovie: state.activeMovie,
  moviesAll: state.moviesAll
});

const mapDispatchToProps = (dispatch) => ({
  setActiveScreen(screen) {
    dispatch(ActionCreator.setActiveScreen(screen));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
