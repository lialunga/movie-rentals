import { Router } from "express";
import { AutenticateUserController } from "../modules/users/useCases/autenticateUser/AutenticateUserController";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";


const usersRoutes = Router();

const createUsersController = new CreateUserController()
const autenticateUserController = new AutenticateUserController()

usersRoutes.post("/", (req, res) =>{
    return createUsersController.handle(req, res);
})

usersRoutes.post("/session", autenticateUserController.handle)

export { usersRoutes };