import bcrypt from 'bcrypt';
import { BcryptHash } from '../BcryptHash.js';

describe('a BcryptHash', () => {
  it('should ecrypt plain text correctly', async () => {
    const spyBcrypt = jest.spyOn(bcrypt, 'hash');
   
    const bcrypHash = new BcryptHash(bcrypt);
    const result = await bcrypHash.hash('plain_text');
    
    expect(result).not.toEqual('plain_text');
    expect(spyBcrypt).toHaveBeenCalledWith('plain_text', 10);
  });
});