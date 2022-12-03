import fetch from "cross-fetch";
import {
  Game,
  GameDetails,
  PlayerDetails,
  PlayerStats,
  Standing,
  TeamBase,
  TeamDetails,
  Weather,
} from "./types";

const fletcher = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, {
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.SPORTSDATA_API_KEY as string,
    },
  });
  return res.json();
};

export const getSchedule = async (): Promise<Game[]> => {
  const res = await fletcher(
    `https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2022REG`
  );
  return res as Game[];
};

export const getGameByTeam = async (week: string) => {
  const res = await fletcher(
    `https://api.sportsdata.io/v3/nfl/scores/json/TeamGameStats/2022/${week}`
  );
  return res as GameDetails[];
};

export const getTeamPlayers = async (team: string) => {
  const res = await fletcher(
    `https://api.sportsdata.io/v3/nfl/scores/json/Players/${team}`
  );
  return res as PlayerDetails[];
};

export const getDepthChart = async (): Promise<TeamBase[]> => {
  const res = await fletcher(
    "https://api.sportsdata.io/v3/nfl/scores/json/DepthCharts"
  );
  return res as TeamBase[];
};

export const getLeagueStandings = async (): Promise<Standing[]> => {
  const res = await fletcher(
    "https://api.sportsdata.io/v3/nfl/scores/json/Standings/2022"
  );
  return res as Standing[];
};

export const getTeamsDetails = async (): Promise<TeamDetails[]> => {
  const res = await fletcher(
    "https://api.sportsdata.io/v3/nfl/scores/json/AllTeams"
  );
  return res as TeamDetails[];
};
export const getWeather = async (
  location: { lat: number; long: number },
  yyyy_mm_dd: string
): Promise<Weather> => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/history.json?key=${process.env.WEATHER_API_KEY}&q=${location.lat},${location.long}&dt=${yyyy_mm_dd}`
  );
  const d = await res.json();
  return d as Weather;
};
export const getPlayerStats = async (
  week: string,
  team: string
): Promise<PlayerStats[]> => {
  const res = await fletcher(
    `https://api.sportsdata.io/v3/nfl/stats/json/PlayerGameStatsByTeam/2022/${week}/${team}`
  );
  return res as PlayerStats[];
};
