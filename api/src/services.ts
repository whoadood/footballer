import fetch from "cross-fetch";
import { Game } from "./types";

export const getFootball = async (): Promise<Game[]> => {
  const res = await fetch(
    `https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2022`,
    {
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.SPORTSDATA_API_KEY as string,
      },
    }
  );
  return res.json();
};

export const getGameByTeam = async (week: string) => {
  const res = await fetch(
    `https://api.sportsdata.io/v3/nfl/scores/json/TeamGameStats/2022/${week}`,
    {
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.SPORTSDATA_API_KEY as string,
      },
    }
  );
  return res.json();
};
