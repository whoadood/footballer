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
