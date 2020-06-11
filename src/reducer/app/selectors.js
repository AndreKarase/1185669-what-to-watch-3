import NameSpace from '../name-space.js';

export const getActiveScreen = (state) => {
  return state[NameSpace.APP].activeScreen;
};

export const getPreviosScreen = (state) => {
  return state[NameSpace.APP].previosScreen;
};

export const getActiveGenre = (state) => {
  return state[NameSpace.APP].activeGenre;
};

export const getActiveMovie = (state) => {
  return state[NameSpace.APP].activeMovie;
};
