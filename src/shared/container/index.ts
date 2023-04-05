import { container } from "tsyringe";
import { IGenresRepository } from "../../modules/genres/repositories.ts/IGenresRepository";
import { GenresRepository } from "../../modules/genres/repositories.ts/implements/GenresRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { IMovieRepository } from "../../modules/movies/repositories/IMoviesRepository";
import { MoviesRepository } from "../../modules/movies/repositories/implements/MoviesRepository";


container.registerSingleton<IUsersRepository>(
    "UserRepository",
    UsersRepository
)

container.registerSingleton<IGenresRepository>(
    "GenresRepository",
    GenresRepository
)

container.registerSingleton<IMovieRepository>(
    "MoviesRepository",
    MoviesRepository
)