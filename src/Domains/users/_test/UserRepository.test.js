import { UserRepository } from "../UserRepository.js";

describe('a UserRepository interface', () => {
  it('should throw error when instantiate abstract behavior', async () => {
    const userRepository = new UserRepository();
    await expect(() => userRepository.verifyAvailableUsername('')).rejects.toThrow(Error);
    await expect(() => userRepository.addUser({})).rejects.toThrow(Error);
  });
});