import { Hash } from '../Hash.js';

describe ('a Hash interface', () => {
  it('should throw error when instantiate abstract behavior', async () => {
    const hash = new Hash();
    await expect(() => hash.hash('plain_text')).rejects.toThrow(Error);
  });
});