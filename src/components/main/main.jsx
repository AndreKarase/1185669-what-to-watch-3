import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Board from '../board/board.jsx';
import {ActionCreator} from '../../reducer/app/app.js';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {Screen} from '../../const.js';
import {getAuthorizationStatus, getAuthInfo} from '../../reducer/user/selectors.js';
import withMaxMoviesCount from '../../hocs/with-max-movies-count/with-max-movies-count.js';

const BoardWrapped = withMaxMoviesCount(Board);

const URL = `https://htmlacademy-react-3.appspot.com`;

class Main extends PureComponent {

  render() {
    const {title, genre, releaseDate, onPlayButtonClick, authorizationStatus, authInfo, onSignInButtonClick} = this.props;

    return (
      <React.Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">

              {/*authorizationStatus === AuthorizationStatus.AUTH*/authInfo ?
                <div className="user-block__avatar">
                  <img src={URL + authInfo[`avatar_url`]} alt="User avatar" width="63" height="63" />
                </div>
                :
                <a className="user-block__link" onClick={onSignInButtonClick}>Sign in</a>
              }

            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{releaseDate}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button"
                    onClick={onPlayButtonClick}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <BoardWrapped/>

          </section>

          <footer className="page-footer">
            <div className="logo">
              <a className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

Main.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onSignInButtonClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authInfo: PropTypes.object
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  authInfo: getAuthInfo(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick() {
    dispatch(ActionCreator.setActiveScreen(Screen.PLAYER));
  },
  onSignInButtonClick() {
    dispatch(ActionCreator.setActiveScreen(Screen.SIGN_IN));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
