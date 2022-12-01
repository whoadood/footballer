import express, { Application, json, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import {
  getDepthChart,
  getSchedule,
  getGameByTeam,
  getLeagueStandings,
  getTeamPlayers,
  getTeamsDetails,
} from "./utils/services";
import { filterByPosition } from "./utils/data-manip";

config();

const app: Application = express();

app.use(cors());
app.use(json());

const PORT: string | number = process.env.PORT || 5000;
const ENV: string = process.env.NODE_ENV || "development";

app.get("/", async (_req: Request, res: Response) => {
  const teams = await getTeamsDetails();
  const schedule = await getSchedule();
  const standings = await getLeagueStandings();
  const teamsStandings = standings.map((team) => {
    const teamDetails = teams.filter(
      (t) => t.GlobalTeamID === team.GlobalTeamID
    );
    return { ...team, ...teamDetails[0] };
  });
  const formatSchedule = schedule.reduce((acc: any, cur) => {
    if (acc[`week${cur.Week}`]) {
      acc[`week${cur.Week}`].push(cur);
    } else {
      acc[`week${cur.Week}`] = [cur];
    }
    return acc;
  }, {});

  res.json({ standings: teamsStandings, schedule: formatSchedule });
});

app.get("/depth", async (_req: Request, res: Response) => {
  const data = await getDepthChart();
  const qb = filterByPosition(data, "QB");
  const wr = filterByPosition(data, "WR");
  const rb = filterByPosition(data, "RB");
  res.json({ qb, wr, rb });
});

app.post("/game", async (req: Request, res: Response) => {
  const { week, teamId } = req.body;
  const data = await getGameByTeam(week);
  const gameDetails = data.filter((g) => g.GlobalTeamID === teamId)[0];
  res.json(gameDetails);
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
