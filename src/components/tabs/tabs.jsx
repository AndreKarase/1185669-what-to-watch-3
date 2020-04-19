import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {getRatingLevel} from '../../utils.js';

const TabNames = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: TabNames.OVERVIEW
    };
  }

  render() {
    const {movie} = this.props;
    const {activeTab} = this.state;
    const {rating, scoresCount, description, director, starring, genre, releaseDate, runtime, comments} = movie;
    const ratingLevel = getRatingLevel(rating);

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {Object.values(TabNames).map((tab, i) => {
              return (
                <li key={`tab-name-${i}`} className={`movie-nav__item ${activeTab === tab ? `movie-nav__item--active` : ``}`}
                  onClick={() => this.setState({activeTab: tab})}
                >
                  <a href="#" className="movie-nav__link">{tab}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        {activeTab === TabNames.OVERVIEW ?
          <React.Fragment>
            <div className="movie-rating">
              <div className="movie-rating__score">{rating}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{ratingLevel}</span>
                <span className="movie-rating__count">{scoresCount} ratings</span>
              </p>
            </div>
            <div className="movie-card__text">
              {description}
              <p className="movie-card__director"><strong>Director: {director}</strong></p>
              <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
            </div>
          </React.Fragment> : null
        }
        {activeTab === TabNames.DETAILS ?
          <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Director</strong>
                <span className="movie-card__details-value">{director}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Starring</strong>
                <span className="movie-card__details-value">
                  {starring.map((actor, i) => {
                    if (i < starring.length - 1) {
                      return (
                        <React.Fragment key={`actor-${i}`}>
                          {actor}, <br />
                        </React.Fragment>
                      );
                    } else {
                      return (
                        <React.Fragment key={`actor-${i}`}>
                          {actor}
                        </React.Fragment>
                      );
                    }
                  })}
                </span>
              </p>
            </div>
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Run Time</strong>
                <span className="movie-card__details-value">{`${Math.floor(runtime / 60)}h ${runtime % 60}m`}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Genre</strong>
                <span className="movie-card__details-value">{genre}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Released</strong>
                <span className="movie-card__details-value">{releaseDate}</span>
              </p>
            </div>
          </div> : null
        }
        {activeTab === TabNames.REVIEWS ?
          <div className="movie-card__reviews movie-card__row">
            <div className="movie-card__reviews-col">
              {comments.map((comment, i) => {
                return (
                  <div key={`comment-${i}`} className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">{comment.comment}</p>
                      <footer className="review__details">
                        <cite className="review__author">{comment.user}</cite>
                        <time className="review__date" dateTime={comment.date}>{comment.date}</time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">{comment.rating}</div>
                  </div>
                );
              })}
            </div>
            <div className="movie-card__reviews-col">

            </div>
          </div> : null
        }
      </div>
    );
  }
}

Tabs.propTypes = {
  movie: PropTypes.object.isRequired
};

// Tabs.propTypes = {
//   movie: PropTypes.arrayOf(PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     previewImage: PropTypes.string.isRequired,
//     posterImage: PropTypes.string.isRequired,
//     backgroundImage: PropTypes.string.isRequired,
//     genre: PropTypes.string.isRequired,
//     releaseDate: PropTypes.number.isRequired,
//     preview: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//     scoresCount: PropTypes.number.isRequired,
//     director: PropTypes.string.isRequired,
//     starring: PropTypes.array.isRequired,
//     runtime: PropTypes.number.isRequired,
//     comments: PropTypes.arrayOf(PropTypes.shape({
//       user: PropTypes.string.isRequired,
//       comment: PropTypes.string.isRequired,
//       date: PropTypes.instanceOf(Date).isRequired,
//       rating: PropTypes.string.isRequired
//     }))
//   })).isRequired
// };

export default Tabs;
