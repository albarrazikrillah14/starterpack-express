import { UsersTableTestHelper } from "../../../../tests/UsersTableTestHelper.js";
import { UserRepositoryPostgres } from "../UserRepositoryPostgres.js";
import db from "../../database/postgres/db.js";
import { v4 as uuidv4 } from 'uuid';
import { InvariantError } from "../../../Commons/exceptions/InvariantError.js";

describe('a UserRepositoryPostgres', () => {
  afterEach(async () => {
    await UsersTableTestHelper.cleanTable();
  });

  describe('a verifyAvailableUsername', () => {
    it('should throw error when username already exist', async () => {
      await UsersTableTestHelper.postUser({ username: 'medomeckz' });
      const userRepository = new UserRepositoryPostgres(db, {});
      await expect(() => userRepository.verifyAvailableUsername('medomeckz')).rejects.toThrow(InvariantError);
    });

    it('should not throw error when username is not exist', () => {
      const userRepository = new UserRepositoryPostgres(db, {});
      expect(() => userRepository.verifyAvailableUsername('medomeckz')).not.toThrow(InvariantError);
    });
  });

  describe('a postUser', () => {
    it('should add user correctly', async () => {
      const userRepository = new UserRepositoryPostgres(db, uuidv4);

      const payload = {
        username: 'medomeckz',
        password: 'secret',
        fullname: 'Albarra Zikrillah'
      };

      const registedUser = await userRepository.addUser(payload);
      expect(registedUser.username).toEqual(payload.username);
      expect(registedUser.fullname).toEqual(payload.fullname);
    });

    it('should throw error when add user', async () => {
      await UsersTableTestHelper.postUser({ username: 'medomeckz' });
      db.models.User.create = jest.fn()
        .mockImplementation(() => Promise.resolve(null));
      const userRepository = new UserRepositoryPostgres(db, uuidv4);
      const payload = {
        username: 'medomeckz',
        password: 'secret',
        fullname: 'Albarra Zikrillah'
      };
      await expect(userRepository.addUser(payload)).rejects.toThrow(InvariantError);
    });
  });
});