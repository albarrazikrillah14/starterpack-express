import { InvariantError } from '../InvariantError.js';

describe('a InvariantError', () => {
  it('should create Invariant Error correctly', () => {
    const invariantError = new InvariantError('error');

    expect(invariantError.statusCode).toEqual(400);
    expect(invariantError.name).toEqual('InvariantError');
    expect(invariantError.message).toEqual('error');
  });
});