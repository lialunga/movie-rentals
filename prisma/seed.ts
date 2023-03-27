import { hash } from "bcrypt";
import prismaClient from "../src/prisma";


async function main() {
    const passwordHash = await hash("admin", 8);

    const user = {
        nome: "admin",
        email: "admin@movies.com",
        isAdmin: true,
        senha: passwordHash
    }

    await prismaClient.user.create({
        data: user
    })
}

main()