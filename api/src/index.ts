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
  getWeather,
} from "./utils/services";
import { filterByPosition } from "./utils/data-manip";
import { Game, PlayerDetails } from "./utils/types";

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
  const formatSchedule = schedule.reduce((acc: Record<string, Game[]>, cur) => {
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
  const { week, gameId } = req.body;
  const data = await getGameByTeam(week);
  const teams = await getTeamsDetails();
  const gameDetails = data.filter((g) => g.GlobalGameID == gameId);
  const formatDetails = gameDetails.map((team) => {
    const teamDetails = teams.filter(
      (t) => t.GlobalTeamID === team.GlobalTeamID
    );
    return { ...team, ...teamDetails[0] };
  });
  const weather = await getWeather(
    formatDetails[0].HomeOrAway === "HOME"
      ? {
          lat: formatDetails[0].StadiumDetails.GeoLat,
          long: formatDetails[0].StadiumDetails.GeoLong,
        }
      : {
          lat: formatDetails[1].StadiumDetails.GeoLat,
          long: formatDetails[1].StadiumDetails.GeoLong,
        },
    formatDetails[0].Date.split("T")[0]
  );
  const formatWeather = weather.forecast.forecastday[0].hour.filter(
    (hour) => hour.time >= formatDetails[0].Date.split("T").join(" ")
  );
  res.json({ formatDetails, weather: formatWeather[0] });
});

app.post("/team", async (req: Request, res: Response) => {
  const { team } = req.body;
  const data = await getTeamPlayers(team);
  const formatPlayers = data.reduce(
    (acc: Record<string, PlayerDetails[]>, cur) => {
      if (acc[cur.Position]) {
        acc[cur.Position].push(cur);
      } else {
        acc[cur.Position] = [cur];
      }
      return acc;
    },
    {}
  );
  res.json(formatPlayers);
});

app.listen(PORT, () =>
  console.log(
    ` 📡 Backend server: ` + ` Running in ${ENV} mode on port ${PORT}`
  )
);
