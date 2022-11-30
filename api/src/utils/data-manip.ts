import { PlayerBase, TeamBase } from "./types";

export const filterByPosition = (data: TeamBase[], position: string) => {
  const filteredData = data.map((team) => {
    const filterOffense = team.Offense.filter((player) => {
      if (position === "WR") {
        return (
          player.Position === "LWR" ||
          player.Position === "RWR" ||
          player.Position === "SWR"
        );
      } else {
        return player.Position === position;
      }
    });
    const filterDefense = team.Offense.filter(
      (player) => player.Position === position
    );
    const filterSpecialTeams = team.SpecialTeams.filter(
      (player) => player.Position === position
    );
    let active;
    if (filterOffense.length > 0) active = filterOffense;
    if (filterDefense.length > 0) active = filterDefense;
    if (filterSpecialTeams.length > 0) active = filterSpecialTeams;
    return { position, active };
  });
  return filteredData;
};
