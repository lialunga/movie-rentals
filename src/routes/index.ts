import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { genresRoutes } from "./genres.routes";


const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/genres", genresRoutes);

export { routes }