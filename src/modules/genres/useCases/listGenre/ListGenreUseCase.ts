import { inject, injectable } from "tsyringe";
import { IGenresRepository } from "../../repositories.ts/IGenresRepository";

@injectable()
class ListGenreUseCase {
    constructor(
        @inject("GenresRepository")
        private genresRepository: IGenresRepository
    ){}

    async execute(){
        const genres = await this.genresRepository.list();

        return genres;
    }
}

export { ListGenreUseCase }