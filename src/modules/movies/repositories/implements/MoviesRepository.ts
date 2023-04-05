import { Movie } from "@prisma/client";
import { ICreateMoviesDTO } from "../../dto/ICreateMovieDTO";
import { IMovieRepository } from "../IMoviesRepository";
import prismaClient from "../../../../prisma";


class MoviesRepository implements IMovieRepository{
    async create({ name, description, daily_rate, fine_amount, genre_id }: ICreateMoviesDTO): Promise<Movie> {
        const movie = await prismaClient.movie.create({
            data: {
                name,
                description,
                daily_rate,
                fine_amount,
                genre_id,
                available: true
            }
        })

        return movie;
    }
    
}

export { MoviesRepository }