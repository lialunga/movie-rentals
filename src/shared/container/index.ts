import { container } from "tsyringe";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";


container.registerSingleton<IUsersRepository>(
    "UserRepository",
    UsersRepository
)