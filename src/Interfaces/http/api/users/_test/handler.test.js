import supertest from "supertest";
import container from "../../../../../Infrastructures/container.js";
import { createServer } from "../../../../../Infrastructures/http/createServer.js";
import { UsersTableTestHelper } from "../../../../../../tests/UsersTableTestHelper.js";

describe('a UsersHandler', () => {
  describe('POST /users', () => {
    afterEach(async () => {
      await UsersTableTestHelper.cleanTable();
    });

    it('should add user correctly', async () => {
      const app = await createServer(container);

      const payload = {
        username: 'medomeckz',
        password: 'secret',
        fullname: 'Albarra Zikrillah'
      };

      const result = await supertest(app)
      .post('/users')
      .send(payload);

      expect(result.status).toEqual(201);

      const response = result.body;
      expect(response.data).not.toBeNull();
      expect(response.data.id).not.toBeNull();
      expect(response.data.username).toEqual(payload.username);
      expect(response.data.fullname).toEqual(payload.fullname);
    });

    it('should throw error when add user', async () => {
      await UsersTableTestHelper.postUser({ username: 'medomeckz' });
      const payload = {
        username: 'medomeckz',
        password: 'secret',
        fullname: 'Albarra Zikrillah'
      };

      const app = await createServer(container);

      const result = await supertest(app)
      .post('/users')
      .send(payload);

      expect(result.status).toEqual(400);
      const response = result.body;
      expect(response.error).not.toBeNull();
      expect(typeof response.error).toBe('string');
    });
  });
});