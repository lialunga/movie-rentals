import { Router } from "express";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { CreateGenreController } from "../modules/genres/useCases/createGenre/CreateGenreController";
import { ListGenreController } from "../modules/genres/useCases/listGenre/ListGenreController";


const genresRoutes = Router()

const createGenreController = new CreateGenreController();
const listGenreController = new ListGenreController();

genresRoutes.post("/", ensureAuthenticated, ensureAdmin, createGenreController.handle)

genresRoutes.get("/", listGenreController.handle)


export { genresRoutes }