import { ICreateUsersDTO } from "../../dto/ICreateUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";


class CreateUserUseCase {
    constructor(
        private usersRepositories: IUsersRepository
    ){}

    async execute({ nome, email, senha }: ICreateUsersDTO){
        const userAlreadExist = await this.usersRepositories.findByEmail(email);

        if(userAlreadExist)
            throw new Error("User alread exists!")
        
        const user = await this.usersRepositories.create({ nome, email, senha })

        return user;
    }
}

export { CreateUserUseCase }