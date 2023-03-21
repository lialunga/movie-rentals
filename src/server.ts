import "reflect-metadata"
import "express-async-error"
import "./shared/container"
import express, { NextFunction, Request, Response } from "express"
import { routes } from "./routes";

import swaggerUi from "swagger-ui-express"
import swaggerDocs from "./swagger.json"
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(routes)

app.use(
    (err: Error, req: Request, res: Response, next: NextFunction) => {
        if(err instanceof AppError){
            return res.status(err.statusCode).json({
                message: err.message
            })
        }
        return res.status(500).json({
            message: `Internal server error ${err.message}`
        })
    }  
)

app.listen(4000, () => console.log("server running!"))