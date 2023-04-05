import { Movie } from "@prisma/client"
import { ICreateMoviesDTO } from "../dto/ICreateMovieDTO"


interface IMovieRepository {
    create({ name, description, daily_rate, fine_amount, genre_id }: ICreateMoviesDTO): Promise<Movie>;
    
}

export { IMovieRepository }