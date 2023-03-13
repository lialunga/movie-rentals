import { ICreateUsersDTO } from "../dto/ICreateUsersDTO"
import { User } from "@prisma/client"


interface IUsersRepository {
    create({ nome, email, senha }: ICreateUsersDTO): Promise<User>;
    findByEmail(email: string): Promise<User>;
}

export { IUsersRepository }