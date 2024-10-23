import Joi from "joi";
import { validate } from "../../../Commons/helpers/ValidationHelper.js";

export class RegisteredUserEntity {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, username, fullname } = payload;
    this.id = id;
    this.username = username;
    this.fullname = fullname;
  }

  _verifyPayload(payload) {
    const schema = Joi.object({
      id: Joi.string().required(),
      username: Joi.string().required(),
      fullname: Joi.string().required(),
    });

    validate(schema, payload);
  }
}