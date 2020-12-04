import * as actions from './actions';
import authReducer, { initialState } from './reducers';

const dummyData = { foo: 'bar' };

describe('reducers test for the Login Page', () => {
  describe('login reducer', () => {
    it('handles the user login request action', () => {
      expect(
        authReducer(initialState, actions.loginRequest(dummyData))
      ).toEqual({
        ...initialState,
        loginLoader: true,
        loginError: null,
      });
    });

    it('handles the user login failed action', () => {
      expect(
        authReducer(initialState, actions.loginFail(dummyData))
      ).toEqual({
        ...initialState,
        loginLoader: false,
        loginError: dummyData,
      });
    });

    it('handles the user login success action', () => {
      expect(
        authReducer(initialState, actions.loginSuccess(dummyData))
      ).toEqual({
        ...initialState,
        loggedinUser: dummyData,
        loginLoader: false,
      });
    });

    it('handles the user logout action', () => {
      expect(authReducer(initialState, actions.logout())).toEqual({
        ...initialState,
      });
    });
  });
});
