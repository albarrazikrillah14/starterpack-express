import { PostUserUseCase } from "../../../../Applications/use_case/users/PostUserUseCase.js";

export class UsersHandler {
  constructor(container) {
    this._container = container;

    this.postUserHandler = this.postUserHandler.bind(this);
  }

  async postUserHandler(req, res, next) {
    try {
      const useCase = this._container.getInstance(PostUserUseCase.name);
      const addedUser = await useCase.execute(req.body);
      console.log(addedUser);
      res.status(201).json({
        data: addedUser
      });
    } catch (e) {
      next(e);
    }
  }
}