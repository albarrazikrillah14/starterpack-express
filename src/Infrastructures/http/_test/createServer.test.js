import { createServer } from "../createServer.js";
import container from "../../container.js";
import supertest from "supertest";

describe('a HTTP Server', () => {
  it('should create server correctly', async () => {
    const app = await createServer(container);
    const result = await supertest(app)
    .get('/');

    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual({
      message: 'Hello, from medomeckz!'
    });
  }); 
});