import { RegisteredUserEntity } from '../RegisteredUserEntity.js';

describe('a RegisteredUserEntity', () =>{ 
  it('should throw error when payload did not meet specification', () => {
    const payload = {
      id: 'user-123',
      username: 'medomeckz'
    };

    expect(() => new RegisteredUserEntity(payload)).toThrow(Error);
  });

  it('should throw error when payload did not meet data type specification', () => {
    const payload = {
      id: null,
      username: true,
      fullname: {}
    };
    expect(() => new RegisteredUserEntity(payload)).toThrow(Error);
  });

  it('should create RegisteredUserEntity correctly', () => {
    const payload = {
      id: 'user-123',
      username: 'medomeckz',
      fullname: 'Albarra Zikrillah'
    };

    const registeredUser = new RegisteredUserEntity(payload);
    expect(registeredUser.id).toEqual(payload.id);
    expect(registeredUser.username).toEqual(payload.username);
    expect(registeredUser.fullname).toEqual(payload.fullname);
  });
});