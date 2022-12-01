import React from "react";
import { GameDetails, TeamDetails } from "../types";
import TableItem from "./TableItem";

/* 
InterceptionReturnTouchdowns: 0​​
InterceptionReturnYards: 22​​
InterceptionReturns: 1
QuarterbackHits: 3
QuarterbackHitsDifferential: 1
QuarterbackHitsPercentage: 11.5
QuarterbackSacksDifferential: 0
SackYards: 7
Sacks: 1
Safeties: 0
*/

export default function Defense({ team }: { team: GameDetails & TeamDetails }) {
  return (
    <dt>
      <TableItem
        options={{ title: "Quarterback Hits", stat: team.QuarterbackHits }}
      />
      <TableItem
        options={{
          title: "Quarterback Hits Percentage",
          stat: team.QuarterbackHitsPercentage,
        }}
      />
      <TableItem
        options={{
          title: "Quarterback Hits Differential",
          stat: team.QuarterbackHitsDifferential,
        }}
      />
      <TableItem options={{ title: "Sacks", stat: team.Sacks }} />
      <TableItem options={{ title: "Sack Yards", stat: team.SackYards }} />
      <TableItem
        options={{
          title: "Quarterback Sacks Differential",
          stat: team.QuarterbackSacksDifferential,
        }}
      />
      <TableItem
        options={{
          title: "Interception Returns",
          stat: team.InterceptionReturns,
        }}
      />
      <TableItem
        options={{
          title: "Interception Return Yards",
          stat: team.InterceptionReturnYards,
        }}
      />
      <TableItem
        options={{
          title: "Interception Return Touchdowns",
          stat: team.InterceptionReturnTouchdowns,
        }}
      />
      <TableItem options={{ title: "Safeties", stat: team.Safeties }} />
    </dt>
  );
}
