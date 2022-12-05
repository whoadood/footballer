import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { PlayerDetails, TeamDetails } from "../utils/types";

const getTeamData = async (
  team: string
): Promise<{ players: Record<string, PlayerDetails[]>; team: TeamDetails }> => {
  const res = await fetch("http://localhost:5000/team", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ team: team }),
  });
  if (!res.ok) throw new Error("Error fetching team data");
  return res.json();
};

export default function useTeamPage() {
  const [active, setActive] = useState<PlayerDetails[] | null>(null);
  const [team, setTeam] = useState<TeamDetails | null>(null);

  const handleActive = (player: PlayerDetails[]) => {
    console.log("active", active);
    setActive(player);
  };

  const teamData = useMutation(getTeamData, {
    onSuccess: (data) => {
      setActive(data.players["QB"]);
      setTeam(data.team);
    },
  });
  return { teamData, team, active, handleActive };
}

/* 
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:5000/team", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ team: teamslug }),
        });
        const d = await res.json();
        // console.log("teamdata ", d);
        setData(d.players);
        setActive(d.players["QB"]);
        setTeam(d.team);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };
    getData();
  }, []);
*/
