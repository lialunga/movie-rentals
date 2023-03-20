import express from "express"
import { routes } from "./routes";

import swaggerUi from "swagger-ui-express"
import swaggerDocs from "./swagger.json"

const app = express();

app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(routes)

app.listen(4000, () => console.log("server running!"))