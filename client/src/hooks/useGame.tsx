import React, { useState } from "react";
import { GameDetails, TeamDetails, Weather } from "../utils/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const getGameData = async ({
  week,
  gameId,
}: {
  week: string | undefined;
  gameId: string | undefined;
}): Promise<{
  formatDetails: (GameDetails & TeamDetails)[];
  weather: Weather;
}> => {
  const res = await fetch(
    `http://localhost:5000/game/${week?.replace("week", "")}/${gameId}`
  );
  if (!res.ok) throw new Error("Could not fetch game data");
  return res.json();
};

export default function useGame() {
  const { gameId, week } = useParams();
  const gameData = useQuery(
    [`game${week}${gameId}`, { week, gameId }],
    () => getGameData({ week, gameId }),
    {
      enabled: !!{ week, gameId },
    }
  );
  return { gameData };
}

/* 
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:5000/game", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            week: week?.replace("week", "").trim(),
            gameId,
          }),
        });
        const d = await res.json();
        console.log("game data: ", d);
        setData(d.formatDetails);
        setWeather(d.weather);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };
    getData();
  }, []);
*/
