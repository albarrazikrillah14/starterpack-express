/* istanbul ignore file */

import db from "../models/index.js";

export const UsersTableTestHelper = {
  async findUserById(id) {
    const result = await db.models.User.findAll({
      where: { id }
    });

    return result;
  },
  async postUser({ id = 'user-123', username = 'medomeckz', password = 'secret', fullname = 'Albarra Zikrillah' }) {
    await db.models.User.create({
      id,
      username,
      password,
      fullname
    });
  },
  async cleanTable() {
    await db.models.User.truncate();
  }
}