import { UserRepositoryPostgres } from "../UserRepositoryPostgres.js";
import db from "../../../../models/index.js";

describe('a UserRepositoryPostgres', () => {
  describe('a verifyAvailableUsername', () => {
    it('should not throw error when username never use', async () => {
      db.sync({ alter: true });
      const userRepository = new UserRepositoryPostgres(db, {});
      expect(userRepository.verifyAvailableUsername('medomeckz')).resolves.not.toThrow(Error);
    });
  });
});