import { InvariantError } from "../../Commons/exceptions/InvariantError.js";
import { RegisteredUserEntity } from "../../Domains/users/entities/RegisteredUserEntity.js";
import { UserRepository } from "../../Domains/users/UserRepository.js";

export class UserRepositoryPostgres extends UserRepository {
  constructor(db, idGenerator) {
    super();
    this._db = db;
    this._idGenerator = idGenerator;
  }

  async verifyAvailableUsername(username) {
    const result = await this._db.models.User.findOne({
      attributes: ['username'],
      where: { username }
    });

    if (result) {
      throw new InvariantError('username tidak tersedia');
    }
  }

  async addUser(registerUser) {
    const id = this._idGenerator();
    const result = await this._db.models.User.create({
      id,
      ...registerUser,
    });

    if (!result) {
      throw new InvariantError('gagal menambahkan user');
    }

    return new RegisteredUserEntity({
      id: result.dataValues.id,
      username: result.dataValues.username,
      fullname: result.dataValues.fullname,
    });
  }
}