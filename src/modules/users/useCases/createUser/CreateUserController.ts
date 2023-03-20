import { Request, Response } from "express";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

const usersRepository = new UsersRepository()


class CreateUserController {
    async handle(req: Request, res: Response){
        const { nome, email, senha } = req.body;

        const createUserUseCase = new CreateUserUseCase(usersRepository);

        const user = await createUserUseCase.execute({ nome, email, senha })

        return res.status(201).json(user)
    }
}

export { CreateUserController };