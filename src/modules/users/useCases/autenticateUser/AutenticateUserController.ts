import { Request, Response } from "express";
import { container } from "tsyringe";
import { AutenticateUserUseCase } from "./AutenticateUserUseCase";


class AutenticateUserController {
    async handle(req: Request, res: Response){
        const { email, senha } = req.body;

        const autenticateUserUseCase = container.resolve(AutenticateUserUseCase);

        const tokenResponse = await autenticateUserUseCase.execute(email, senha);

        return res.json(tokenResponse)
    }
}

export { AutenticateUserController };