import { AuthorizationError } from '../AuthorizationError.js';

describe('a AuthorizationError', () => {
  it('should create AuthorizationError correctly', () => {
    const authorizationError = new AuthorizationError('authorization error');

    expect(authorizationError.statusCode).toEqual(403);
    expect(authorizationError.name).toEqual('AuthorizationError');
    expect(authorizationError.message).toEqual('authorization error');
  });
});