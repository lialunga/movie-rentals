import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListGenreUseCase } from "./ListGenreUseCase";


class ListGenreController {
    async handle(req: Request, res: Response){
        const listGenreUseCase = container.resolve(ListGenreUseCase);

        const genres = await listGenreUseCase.execute();

        return res.status(200).json(genres)
    }
}

export { ListGenreController };