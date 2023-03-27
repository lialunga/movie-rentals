import { container } from "tsyringe";
import { IGenresRepository } from "../../modules/genres/repositories.ts/IGenresRepository";
import { GenresRepository } from "../../modules/genres/repositories.ts/implements/GenresRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";


container.registerSingleton<IUsersRepository>(
    "UserRepository",
    UsersRepository
)

container.registerSingleton<IGenresRepository>(
    "GenresRepository",
    GenresRepository
)