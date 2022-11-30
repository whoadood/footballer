import express, { Application, json, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import { getFootball, getGameByTeam, getTeamPlayers } from "./services";

config();

const app: Application = express();

app.use(cors());
app.use(json());

const PORT: string | number = process.env.PORT || 5000;
const ENV: string = process.env.NODE_ENV || "development";

app.get("/", async (_req: Request, res: Response) => {
  const data = await getFootball();
  res.json(data);
});

app.post("/game", async (req: Request, res: Response) => {
  const { week } = req.body;
  const data = await getGameByTeam(week);
  res.json(data);
});

app.post("/team", async (req: Request, res: Response) => {
  const { team } = req.body;
  console.log("server team", team);
  const data = await getTeamPlayers(team);
  res.json(data);
});

app.listen(PORT, () =>
  console.log(
    ` 📡 Backend server: ` + ` Running in ${ENV} mode on port ${PORT}`
  )
);
