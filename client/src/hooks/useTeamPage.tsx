import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { PlayerDetails, TeamDetails } from "../utils/types";
import { useParams } from "react-router-dom";

const getTeamData = async (
  team: string | undefined
): Promise<{ players: Record<string, PlayerDetails[]>; team: TeamDetails }> => {
  console.log("fetch team,", team);
  const res = await fetch(`http://localhost:5000/team/${team}`);
  if (!res.ok) throw new Error("Error fetching team data");
  return res.json();
};

export default function useTeamPage() {
  const [active, setActive] = useState<PlayerDetails[] | null>(null);
  const { teamslug } = useParams();
  console.log("use team page hook, ", teamslug);

  const handleActive = (player: PlayerDetails[]) => {
    console.log("active", active);
    setActive(player);
  };

  const teamData = useQuery(["team"], () => getTeamData(teamslug), {
    enabled: !!teamslug,
    onSuccess: (data) => {
      setActive(data.players["QB"]);
    },
  });

  return { teamData, active, handleActive };
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
