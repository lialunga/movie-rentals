import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";


const usersRoutes = Router();

const createUsersController = new CreateUserController()

usersRoutes.post("/", createUsersController.handle)

export { usersRoutes };