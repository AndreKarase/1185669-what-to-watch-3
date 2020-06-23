import {extend} from '../../utils.js';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_AUTH_INFO: `LOAD_AUTH_INFO`
};

const ActionCreator = {
  requiredAutorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };
  },

  loadAuthInfo: (authInfo) => ({
    type: ActionType.LOAD_AUTH_INFO,
    payload: authInfo
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });

    case ActionType.LOAD_AUTH_INFO:
      return extend(state, {
        authInfo: action.payload
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requiredAutorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authInfo) => (dispatch, getState, api) => {
    return api.post(`/login`, authInfo)
     .then((response) => {
       dispatch(ActionCreator.loadAuthInfo(response.data));
       dispatch(ActionCreator.requiredAutorization(AuthorizationStatus.AUTH));
     });
  }
};

export {ActionType, ActionCreator, AuthorizationStatus, reducer, Operation};


