import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";


interface IResponse {
    user: {
        name: string;
        email: string;
    },
    token: string;
}

@injectable()
class AutenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUsersRepository
    ){}

    async execute(email: string, senha: string){
        const user = await this.userRepository.findByEmail(email);

        if(!user)
            throw new AppError("Email or password incorrect!", 404)

        const passwordMatch = await compare(senha, user.senha);

        if(!passwordMatch)
            throw new AppError("Email or password incorrect!")

        const token = sign(
            {

            },
            "qualquer coisa secreta",
            { 
                subject: user.id,
                expiresIn: "1d"
            }
        )

        const tokenResponse: IResponse = {
            user: {
                name: user.nome,
                email: user.email
            },
            token
        }

        return tokenResponse;
    }
}

export { AutenticateUserUseCase }