import {reducer, ActionCreator, ActionType, AuthorizationStatus} from './user.js';

it(`Reducer without additional parameters should render initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: null
  });
});

it(`Reducer should change authorization status by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: null
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    authInfo: null
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
    authInfo: null
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: null
  });
});

it(`Reducer should change authorization information by a given value`, () => {
  expect(reducer({
    authorizationStatus: ``,
    authInfo: null
  }, {
    type: ActionType.LOAD_AUTH_INFO,
    payload: {}
  })).toEqual({
    authorizationStatus: ``,
    authInfo: {}
  });
});

describe(`Action creators works correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requiredAutorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    });
  });

  it(`Action creator for load authorization information returns correct action`, () => {
    expect(ActionCreator.loadAuthInfo({})).toEqual({
      type: ActionType.LOAD_AUTH_INFO,
      payload: {}
    });
  });
});
