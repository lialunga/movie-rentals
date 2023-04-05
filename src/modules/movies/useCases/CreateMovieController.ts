import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMovieUseCase } from "./CreateMovieUseCase";


class CreateMovieController {
    async handle(req: Request, res: Response){
        const { name, description, daily_rate, fine_amount, genre_id } = req.body;

        const createMovieUseCase = container.resolve(CreateMovieUseCase);

        const movie = await createMovieUseCase.execute({
            name, description, daily_rate, fine_amount, genre_id
        })

        return res.status(201).json(movie)
    }
}

export { CreateMovieController }