import React from "react";
import { GameDetails, TeamDetails } from "../types";
import TableItem from "./TableItem";

/* 
Fumbles: 0
FumblesLost: 0
FumblesRecovered: 1
Giveaways: 1
FumblesForced: 1
FumbleReturnTouchdowns: 0
FumbleReturnYards: 0
Penalties: 2
PenaltyYards: 21
AssistedTackles: 10
SoloTackles: 41​​
*/

export default function General({ team }: { team: GameDetails & TeamDetails }) {
  return (
    <dt>
      <TableItem options={{ title: "Penalties", stat: team.Penalties }} />
      <TableItem
        options={{ title: "Penalty Yards", stat: team.PenaltyYards }}
      />
      <TableItem
        options={{ title: "Assisted Tackles", stat: team.AssistedTackles }}
      />
      <TableItem options={{ title: "Solo Tackles", stat: team.SoloTackles }} />
      <TableItem options={{ title: "Fumbles", stat: team.Fumbles }} />
      <TableItem options={{ title: "Fumbles Lost", stat: team.FumblesLost }} />
      <TableItem
        options={{ title: "Fumbles Recovered", stat: team.FumblesRecovered }}
      />
      <TableItem
        options={{ title: "Fumbles Forces", stat: team.FumblesForced }}
      />
      <TableItem
        options={{
          title: "Fumble Return TouchDowns",
          stat: team.FumbleReturnTouchdowns,
        }}
      />
      <TableItem
        options={{ title: "Fumble Return Yards", stat: team.FumbleReturnYards }}
      />
      <TableItem options={{ title: "Giveaways", stat: team.Giveaways }} />
    </dt>
  );
}
