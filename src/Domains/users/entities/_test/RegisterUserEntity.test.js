import { InvariantError } from '../../../../Commons/exceptions/InvariantError.js';
import { RegisterUserEntity } from '../RegisterUserEntity.js';

describe('a RegisterUserEntity', () => {
  it('should throw error when RegisterUserEntity payload did not meet specification', () => {
    const payload = {
      username: 'medomeckz',
      password: 'secret'
    };

    expect(() => new RegisterUserEntity(payload)).toThrow(InvariantError);
  });

  it('should throw error when RegisterUserEntity payload did not meet data type specification', () => {
    const payload = {
      username: true,
      password: {}
    };
    expect(() => new RegisterUserEntity(payload)).toThrow(InvariantError);
  });

  it('should throw error when RegisterUserEntity.username contains restricted character', () => {
    const payload = {
      username: 'medo meckz',
      password: 'secret',
      fullname: 'Albarra Zikrillah'
    };
    expect(() => new RegisterUserEntity(payload)).toThrow(InvariantError);
  });

  it('should create user entity object correctly', () => {
    const payload = {
      username: 'medomeckz',
      password: 'secret',
      fullname: 'Albarra Zikrillah'
    };

    const registerUser = new RegisterUserEntity(payload);
    expect(registerUser.username).toEqual(payload.username);
    expect(registerUser.password).toEqual(payload.password);
    expect(registerUser.fullname).toEqual(payload.fullname);
  });
});