import React, { useState } from "react";
import { PlayerStats } from "../utils/types";
import { useMutation } from "@tanstack/react-query";

const getTeamStats = async ({
  team,
  week,
}: {
  team: string;
  week: string;
}): Promise<PlayerStats[]> => {
  const res = await fetch(`http://localhost:5000/team/stats`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      week: week.replace("week", ""),
      team: team,
    }),
  });
  if (!res.ok) throw new Error("Could not fetch team stats");
  return res.json();
};

export default function useTeamStats() {
  const [activePlayer, setActivePlayer] = useState<PlayerStats | null>(null);
  const [stats, setStats] = useState<PlayerStats[] | null>(null);

  const handleActivePlayer = (playerSet: PlayerStats | undefined) => {
    setActivePlayer((cur) => (playerSet ? playerSet : cur));
  };

  const teamStats = useMutation(getTeamStats, {
    onSuccess: (data) => {
      setActivePlayer(
        data.find((p) =>
          activePlayer
            ? p.PlayerID === activePlayer.PlayerID
            : p.Position === "QB"
        ) as PlayerStats
      );
      setStats(data);
    },
  });
  return { teamStats, activePlayer, stats, handleActivePlayer };
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
