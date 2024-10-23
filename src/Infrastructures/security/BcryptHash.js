import { Hash } from "../../Applications/security/Hash.js";

export class BcryptHash extends Hash {
  constructor(bcrypt, saltRound = 10) {
    super();
    this._bcrypt = bcrypt;
    this._saltRound = saltRound;
  }
  
  async hash(plainText) {
    return this._bcrypt.hash(plainText, this._saltRound);
  }
}