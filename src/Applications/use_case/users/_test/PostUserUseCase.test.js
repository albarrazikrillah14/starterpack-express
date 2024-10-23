import { RegisteredUserEntity } from '../../../../Domains/users/entities/RegisteredUserEntity.js';
import { UserRepository } from '../../../../Domains/users/UserRepository.js';
import { Hash } from '../../../security/Hash.js';
import { PostUserUseCase } from '../PostUserUseCase.js';

describe('a PostUserUseCase', () => {
  it('should orchestrating the add user  correctly', async () => {
    const useCasePayload = {
      username: 'user123',
      password: 'secret',
      fullname: 'Albarra Zikrillah'
    };

    const mockRegisteredUser = new RegisteredUserEntity({
      id: 'user123',
      username: useCasePayload.username,
      fullname: useCasePayload.fullname
    });

    const mockUserRepository = new UserRepository();
    const mockHash = new Hash();

    mockUserRepository.verifyAvailableUsername = jest.fn()
      .mockImplementation(() => Promise.resolve());
    mockHash.hash = jest.fn()
      .mockImplementation(() => Promise.resolve('encrypted_password'));
    mockUserRepository.addUser = jest.fn()
      .mockImplementation(() => Promise.resolve(mockRegisteredUser));

    const useCase = new PostUserUseCase({
      userRepository: mockUserRepository,
      hash: mockHash
    });

    const registeredUser = await useCase.execute(useCasePayload);

    expect(registeredUser).toStrictEqual(new RegisteredUserEntity({
      id: 'user123',
      username: useCasePayload.username,
      fullname: useCasePayload.fullname,
    }));
    expect(mockUserRepository.verifyAvailableUsername).toHaveBeenCalledWith(useCasePayload.username);
    expect(mockHash.hash).toHaveBeenCalledWith(useCasePayload.password);
  });
});