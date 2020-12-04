import { take, call, put } from 'redux-saga/effects';
import * as saga from './saga';
import * as actions from './actions';
import * as types from '../../utils/actionTypes';

import { login } from '../../utils/requests';

describe(' Login Saga, loginRequestWatcher', () => {
  it('has a happy case scenario', () => {
    const generator = saga.loginRequestWatcher();
    const dummyPayload = {
      username: 'Username',
      password: 'password',
    };
    expect(generator.next(types.LOGIN_REQUEST).value).toEqual(
      take(types.LOGIN_REQUEST)
    );

    expect(
      generator.next(actions.loginRequest(dummyPayload)).value
    ).toEqual(call(login, dummyPayload));

    const mockResponse = {
      data: {
        foo: 'bar'
      }
    };

    expect(generator.next(mockResponse).value).toEqual(
      put(actions.loginSuccess(mockResponse.data))
    );
  });

  it('has a worst case scenario', () => {
    const generator = saga.loginRequestWatcher();
    const dummyPayload = {
      foo: 'bar'
    };
    expect(generator.next(types.LOGIN_REQUEST).value).toEqual(
      take(types.LOGIN_REQUEST)
    );

    expect(
      generator.next(actions.loginRequest(dummyPayload)).value
    ).toEqual(call(login, dummyPayload));

    const mockResponse = {
      response: {
        data: {
          error: 'unauthorized',
          error_description: 'error'
        }
      }
    };

    expect(generator.throw(mockResponse).value).toEqual(
      put(actions.loginFail(mockResponse.response.data))
    );
  });
});
