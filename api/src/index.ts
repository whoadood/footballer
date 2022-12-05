import express, { Application, json } from "express";
import cors from "cors";
import { config } from "dotenv";
import homeRouter from "./router/home";
import depthRouter from "./router/depth";
import gameRouter from "./router/game";
import teamRouter from "./router/team";

config();

const app: Application = express();

app.use(cors());
app.use(json());

const PORT: string | number = process.env.PORT || 5000;
const ENV: string = process.env.NODE_ENV || "development";

app.use("/", homeRouter);
app.use("/depth", depthRouter);
app.use("/game", gameRouter);
app.use("/team", teamRouter);

app.listen(PORT, () =>
  console.log(
    ` 📡 Backend server: ` + ` Running in ${ENV} mode on port ${PORT}`
  )
);
