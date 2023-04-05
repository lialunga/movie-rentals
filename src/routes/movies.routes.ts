import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/CreateMovieController";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";


const moviesRoute = Router();
const createMovieController = new CreateMovieController()

moviesRoute.post("/", ensureAuthenticated, ensureAdmin, createMovieController.handle)


export { moviesRoute }