import Joi from "joi";
import { validate } from "../../../Commons/helpers/ValidationHelper.js";

export class RegisterUserEntity {
  constructor(payload) {
    this._verifyPayload(payload);

    const { username, password, fullname } = payload;
    this.username = username;
    this.password = password;
    this.fullname = fullname;
  }

  _verifyPayload(payload) {
    const schema = Joi.object({
      username: Joi.string().required().pattern(/^[\w]+$/).message('username tidak dapat mengandung karakter yang dilarang'),
      password: Joi.string().required(),
      fullname: Joi.string().required(),
    });

    validate(schema, payload);
  }
}