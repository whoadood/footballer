import React, { useState } from "react";
import { PlayerStats } from "../utils/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const getTeamStats = async ({
  team,
  week,
}: {
  team: string | undefined;
  week: string;
}): Promise<PlayerStats[]> => {
  const res = await fetch(
    `http://localhost:5000/team/stats/${week.replace("week", "")}/${team}`
  );
  if (!res.ok) throw new Error("Could not fetch team stats");
  return res.json();
};

export default function useTeamStats() {
  const { teamslug } = useParams();
  const [activePlayer, setActivePlayer] = useState<PlayerStats | null>(null);
  const [week, setWeek] = useState<
    | "week1"
    | "week2"
    | "week3"
    | "week4"
    | "week5"
    | "week6"
    | "week7"
    | "week8"
    | "week9"
    | "week10"
    | "week11"
    | "week12"
    | "week13"
    | "week14"
    | "week15"
    | "week16"
    | "week17"
    | "week18"
  >("week1");

  const handleActivePlayer = (playerSet: PlayerStats | undefined) => {
    setActivePlayer((cur) => (playerSet ? playerSet : cur));
  };

  const teamStats = useQuery(
    [`stats${teamslug}`, { teamslug, week }],
    () => getTeamStats({ team: teamslug, week }),
    {
      enabled: !!teamslug,
      onSuccess: (data) => {
        setActivePlayer(
          data.find((p) =>
            activePlayer
              ? p.PlayerID === activePlayer.PlayerID
              : p.Position === "QB"
          ) as PlayerStats
        );
      },
    }
  );
  return { teamStats, activePlayer, week, setWeek, handleActivePlayer };
}

/* 
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:5000/team/stats`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          week: week.replace("week", ""),
          team: teamslug,
        }),
      });
      const d: PlayerStats[] = await res.json();
      console.log("player stats", d);
      setStats(d);
      setActivePlayer(
        d.find((p) =>
          activePlayer
            ? p.PlayerID === activePlayer.PlayerID
            : p.Position === "QB"
        ) as PlayerStats
      );
    };
    getData();
  }, [week]);
*/
