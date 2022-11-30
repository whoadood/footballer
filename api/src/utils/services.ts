import fetch from "cross-fetch";
import { Game, TeamBase } from "./types";

const fletcher = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.SPORTSDATA_API_KEY as string,
    },
  });
  return response.json();
};

export const getSchedule = async (): Promise<Game[]> => {
  const res = await fletcher(
    `https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2022REG`
  );
  return res;
};

export const getGameByTeam = async (week: string) => {
  const res = await fletcher(
    `https://api.sportsdata.io/v3/nfl/scores/json/TeamGameStats/2022/${week}`
  );
  return res;
};

export const getTeamPlayers = async (team: string) => {
  const res = await fletcher(
    `https://api.sportsdata.io/v3/nfl/scores/json/Players/${team}`
  );
  return res;
};

export const getDepthChart = async (): Promise<TeamBase[]> => {
  const res = await fletcher(
    "https://api.sportsdata.io/v3/nfl/scores/json/DepthCharts"
  );
  return res;
};

export const getLeagueStandings = async (): Promise<any> => {
  const res = await fletcher(
    "https://api.sportsdata.io/v3/nfl/scores/json/Standings/2022"
  );
  return res;
};
