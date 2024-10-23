import { ClientError } from "../ClientError.js";

describe('a ClientError', () => {
  it('should throw error when instantiate abstract class', () => {
    expect(() => new ClientError('')).toThrow(Error('cannot instantiate abstract class'));
  });
});