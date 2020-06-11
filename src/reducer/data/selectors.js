import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';
import {getActiveGenre} from '../app/selectors.js';

const adaptMovie = (movie) => {
  return {
    id: movie[`id`],
    title: movie[`name`],
    previewImage: movie[`preview_image`],
    posterImage: movie[`poster_image`],
    backgroundImage: movie[`background_image`],
    backgroundColor: movie[`background_color`],
    video: movie[`video_link`],
    preview: movie[`preview_video_link`],
    genre: movie[`genre`],
    releaseDate: movie[`released`],
    description: movie[`description`],
    rating: movie[`rating`],
    scoresCount: movie[`scores_count`],
    director: movie[`director`],
    starring: movie[`starring`],
    runtime: movie[`run_time`],
    isFavorite: movie[`is_favorite`]
  };
};

export const getMoviesAll = (state) => {
  return state[NameSpace.DATA].movies.map((movie) => adaptMovie(movie));
};

export const getMovies = createSelector(
    getMoviesAll,
    getActiveGenre,
    (movies, genre) => {
      return genre === `All genres` ? movies : movies.filter((movie) => movie.genre === genre);
    }
);

