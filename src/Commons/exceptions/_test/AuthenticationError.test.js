import { AuthenticationError } from '../AuthenticationError.js';

describe('a AuthenticationError', () => {
  it('should create authenticationError correctly', () => {
    const authenticationError = new AuthenticationError('authentication error');

    expect(authenticationError.statusCode).toEqual(401);
    expect(authenticationError.name).toEqual('AuthenticationError');
    expect(authenticationError.message).toEqual('authentication error');
  });
});