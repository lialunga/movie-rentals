import { User } from "@prisma/client";
import prismaClient from "../../../../prisma";
import { ICreateUsersDTO } from "../../dto/ICreateUsersDTO";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepository implements IUsersRepository {
    async create({ nome, email, senha }: ICreateUsersDTO): Promise<User> {
        const user = await prismaClient.user.create({ data: {
            nome, email, senha, isAdmin: false
        }})

        return user;
    }

}

export { UsersRepository }