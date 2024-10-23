import { RegisterUserEntity } from "../../../Domains/users/entities/RegisterUserEntity.js";

export class PostUserUseCase {
  constructor({
    userRepository,
    hash,
  }) {
    this._userRepository = userRepository;
    this._hash = hash;
  }

  async execute(useCasePayload) {
    const registerUser = new RegisterUserEntity(useCasePayload);
    await this._userRepository.verifyAvailableUsername(registerUser.username);
    registerUser.password = await this._hash.hash(registerUser.password);
    return this._userRepository.addUser(registerUser);
  }
}