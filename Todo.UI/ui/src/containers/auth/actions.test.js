import * as types from '../../utils/actionTypes';
import * as actions from './actions';

describe('testing auth actions', () => {
  const dummyPayload = { foo: 'bar' };
  describe('register actions', () => {
    it('creates a REGISTER_REQUEST action, registerRequest', () => {
      expect(actions.registerRequest(dummyPayload)).toEqual({
        type: types.REGISTER_REQUEST,
        payload: dummyPayload,
      });
    });

    it('creates a REGISTER_SUCCESS action, registerSuccess', () => {
      expect(actions.registerSuccess(dummyPayload)).toEqual({
        type: types.REGISTER_SUCCESS,
        payload: dummyPayload,
      });
    });

    it('creates a REGISTER_FAILED action, registerFail', () => {
      expect(actions.registerFail(dummyPayload)).toEqual({
        type: types.REGISTER_FAILED,
        payload: dummyPayload,
      });
    });
    });

    describe('login actions', () => {
      it('creates a LOGIN_REQUEST action, loginRequest', () => {
        expect(actions.loginRequest(dummyPayload)).toEqual({
          type: types.LOGIN_REQUEST,
          payload: dummyPayload,
        });
      });
  
      it('creates a LOGIN_SUCCESS action, loginSuccess', () => {
        expect(actions.loginSuccess(dummyPayload)).toEqual({
          type: types.LOGIN_SUCCESS,
          payload: dummyPayload,
        });
      });
  
      it('creates a LOGIN_FAILED action, loginFail', () => {
        expect(actions.loginFail(dummyPayload)).toEqual({
          type: types.LOGIN_FAILED,
          payload: dummyPayload,
        });
      });
      });

  });
