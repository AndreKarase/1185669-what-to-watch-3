import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import Player from '../video-player/video-player.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import {ActionCreator} from '../../reducer/app/app.js';
import {getActiveMovie, getActiveScreen, getPreviosScreen} from '../../reducer/app/selectors.js';
import {getMoviesAll} from '../../reducer/data/selectors.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {Screen} from '../../const.js';
import withVideo from '../../hocs/with-video/with-video.js';

const VideoPlayer = withVideo(Player);

const movies = [];

class App extends PureComponent {
  _renderApp() {
    const {title, genre, releaseDate, activeMovie, activeScreen, previosScreen, setActiveScreen, login} = this.props;

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
        const {title: activeTitle, posterImage, video} = activeMovie;

        return (
          <VideoPlayer
            src={video}
            title={activeTitle}
            poster={posterImage}
            isPlaying={true}
            isPreview={false}
            muted={false}
            onCloseButtonClick={() => setActiveScreen(previosScreen)}
          />
        );

      case Screen.SIGN_IN:
        return (
          <SignIn
            onSubmit={(authInfo) => {
              login(authInfo);
              setActiveScreen(previosScreen);
            }}
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
    posterImage: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }),
  activeScreen: PropTypes.string.isRequired,
  previosScreen: PropTypes.string,
  setActiveScreen: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeScreen: getActiveScreen(state),
  previosScreen: getPreviosScreen(state),
  activeMovie: getActiveMovie(state),
  moviesAll: getMoviesAll(state)
});

const mapDispatchToProps = (dispatch) => ({
  setActiveScreen(screen) {
    dispatch(ActionCreator.setActiveScreen(screen));
  },

  login(authData) {
    dispatch(UserOperation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
