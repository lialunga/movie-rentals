import { inject, injectable } from "tsyringe";
import { AppError } from "../../../errors/AppError";
import { IGenresRepository } from "../repositories.ts/IGenresRepository";


@injectable()
class CreateGenreUseCase {
    constructor(
        @inject("GenresRepository")
        private genresRepository: IGenresRepository
    ){}

    async execute(name: string){
        const genreAlreadExists = await this.genresRepository.findByName(name);

        if(genreAlreadExists)
            throw new AppError("Género já existe!")

        const genre = await this.genresRepository.create(name);

        return genre;
    }
}

export { CreateGenreUseCase };