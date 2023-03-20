import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe"

class CreateUserController {
    async handle(req: Request, res: Response){
        const { nome, email, senha } = req.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        const user = await createUserUseCase.execute({ nome, email, senha })

        return res.status(201).json(user)
    }
}

export { CreateUserController };