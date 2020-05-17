export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getRatingLevel = (rating) => {
  if (rating >= 0 && rating < 3) {
    return `Bad`;
  } else if (rating >= 3 && rating < 5) {
    return `Normal`;
  } else if (rating >= 5 && rating < 8) {
    return `Good`;
  } else if (rating >= 8 && rating < 10) {
    return `Very good`;
  } else if (rating === 10) {
    return `Awesome`;
  }

  return null;
};

export const getMoviesByGenre = (movies, genre) => {
  return genre === `All genres` ? movies : movies.filter((movie) => movie.genre === genre);
};

export const formatMovieTime = (time) => {
  const hours = Math.floor(time / 60 / 60);
  let mimutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);

  if (mimutes < 10) {
    mimutes = `0` + mimutes;
  }

  if (seconds < 10) {
    seconds = `0` + seconds;
  }

  return `${hours}:${mimutes}:${seconds}`;
};
