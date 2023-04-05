import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { genresRoutes } from "./genres.routes";
import { moviesRoute } from "./movies.routes";


const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/genres", genresRoutes);
routes.use("/movies", moviesRoute);

export { routes }