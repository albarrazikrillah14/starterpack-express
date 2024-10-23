import { NotFoundError } from '../NotFoundError.js';

describe('a NotFounderror', () => {
  it('should create NotFoundError correctly', () => {
    const notFoundError = new NotFoundError('not found error');

    expect(notFoundError.statusCode).toEqual(404);
    expect(notFoundError.name).toEqual('NotFoundError');
    expect(notFoundError.message).toEqual('not found error');
  });
});