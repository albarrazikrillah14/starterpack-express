/* istanbul ignore file */

import db from "../models/index.js";

export const UsersTableTestHelper = {
  async findUserById(id) {
    const result = await db.models.User.findAll({
      where: { id }
    });

    return result;
  },
}