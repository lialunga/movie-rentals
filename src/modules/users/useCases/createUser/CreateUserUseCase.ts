import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { ICreateUsersDTO } from "../../dto/ICreateUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";


@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private usersRepositories: IUsersRepository
    ){}

    async execute({ nome, email, senha }: ICreateUsersDTO){
        const userAlreadExist = await this.usersRepositories.findByEmail(email);

        if(userAlreadExist)
            throw new Error("User alread exists!")

        const senhaHash = await hash(senha, 8);
        
        const user = await this.usersRepositories.create({ 
            nome, 
            email, 
            senha: senhaHash 
        })

        return user;
    }
}

export { CreateUserUseCase }