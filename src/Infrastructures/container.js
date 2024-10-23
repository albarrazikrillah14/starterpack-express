/* istanbul ignore file */

import { createContainer } from "instances-container";
const container = createContainer();

// external
import db from "../../models/index.js";
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

// service 
import { UserRepositoryPostgres } from "./repository/UserRepositoryPostgres.js";
import { BcryptHash } from "./security/BcryptHash.js";

//use case 
import { PostUserUseCase } from "../Applications/use_case/users/PostUserUseCase.js";
import { UserRepository } from "../Domains/users/UserRepository.js";
import { Hash } from "../Applications/security/Hash.js";

//registering service
container.register([
  {
    key: UserRepository.name,
    Class: UserRepositoryPostgres,
    parameter: {
      dependencies: [
        {
          concrete: db,
        },
        {
          concrete: uuidv4
        }
      ]
    }
  },
  {
    key: Hash.name,
    Class: BcryptHash,
    parameter: {
      dependencies: [
        {
          concrete: bcrypt
        }
      ]
    }
  }
]);

container.register([
  {
    key: PostUserUseCase.name,
    Class: PostUserUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'userRepository',
          internal: UserRepository.name
        },
        {
          name: 'hash',
          internal: Hash.name,
        }
      ]
    }
  }
]);
export default container;