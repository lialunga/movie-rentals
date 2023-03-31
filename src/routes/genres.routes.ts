import { Router } from "express";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { CreateGenreController } from "../modules/genres/useCases/createGenre/CreateGenreController";


const genresRoutes = Router()

const createGenreController = new CreateGenreController();

genresRoutes.post("/", ensureAuthenticated, ensureAdmin, createGenreController.handle)


export { genresRoutes }