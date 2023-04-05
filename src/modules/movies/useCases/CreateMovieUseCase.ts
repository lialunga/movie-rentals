import { inject, injectable } from "tsyringe";
import { ICreateMoviesDTO } from "../dto/ICreateMovieDTO";
import { IMovieRepository } from "../repositories/IMoviesRepository";
import { IGenresRepository } from "../../genres/repositories.ts/IGenresRepository";
import { AppError } from "../../../errors/AppError";


@injectable()
class CreateMovieUseCase {
    constructor(
        @inject("MoviesRepository")
        private moviesRepository: IMovieRepository,
        @inject("GenresRepository")
        private genresRepository: IGenresRepository
    ){}
    async execute({ name, daily_rate, description, fine_amount, genre_id }: ICreateMoviesDTO){
        const genreExists = await this.genresRepository.findById(genre_id);

        if(!genreExists)
            throw new AppError("Genre does not exists!", 404)

        const movie = await this.moviesRepository.create({
            name, description, daily_rate, fine_amount, genre_id
        })

        return movie;
    }
}

export { CreateMovieUseCase }