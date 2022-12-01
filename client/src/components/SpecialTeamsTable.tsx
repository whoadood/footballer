import React from "react";
import { GameDetails, TeamDetails } from "../types";
import TableItem from "./TableItem";

/* 
BlockedKickReturnTouchdowns: 0
BlockedKickReturnYards: 0
BlockedKicks: 0
ExtraPointKickingAttempts: 2
ExtraPointKickingConversions: 1
ExtraPointPassingAttempts: 0
ExtraPointPassingConversions: 0
ExtraPointRushingAttempts: 0
ExtraPointRushingConversions: 0
ExtraPointsHadBlocked: 0
FieldGoalAttempts: 0
FieldGoalReturnTouchdowns: 0
FieldGoalReturnYards: 0
FieldGoalsHadBlocked: 0
FieldGoalsMade: 0
KickReturnLong: 26
KickReturnTouchdowns: 0
KickReturnYards: 41
KickReturns: 1
KickoffTouchbacks: 1
​​Kickoffs: 3
​​KickoffsInEndZone: 2
Punts: 4
PuntAverage: 39.8
PuntNetAverage: 0
PuntNetYards: 0
PuntReturnLong: 0
PuntReturnTouchdowns: 0
​​PuntReturnYards: 0
PuntReturns: 1
PuntYards: 239

PuntsHadBlocked: 0
ReturnYards: 22
*/

export default function SpecialTeams({
  team,
}: {
  team: GameDetails & TeamDetails;
}) {
  return (
    <dt>
      <TableItem options={{ title: "​​Kickoffs", stat: team.Kickoffs }} />
      <TableItem
        options={{ title: "Kickoff Touchbacks", stat: team.KickoffTouchbacks }}
      />
      <TableItem
        options={{
          title: "​​Kickoffs In End Zone",
          stat: team.KickoffsInEndZone,
        }}
      />

      <TableItem options={{ title: "Kick Returns", stat: team.KickReturns }} />
      <TableItem
        options={{ title: "Kick Return Yards", stat: team.KickReturnYards }}
      />
      <TableItem
        options={{ title: "Kick Return Long", stat: team.KickReturnLong }}
      />
      <TableItem
        options={{
          title: "Kick Return Touchdowns",
          stat: team.KickReturnTouchdowns,
        }}
      />

      <TableItem options={{ title: "Punts", stat: team.Punts }} />
      <TableItem options={{ title: "Punt Yards", stat: team.PuntYards }} />
      <TableItem options={{ title: "Punt Average", stat: team.PuntAverage }} />

      <TableItem options={{ title: "Punt Returns", stat: team.PuntReturns }} />
      <TableItem
        options={{ title: "​​Punt Return Yards", stat: team.PuntReturnYards }}
      />
      <TableItem
        options={{ title: "Punt Net Average", stat: team.PuntNetAverage }}
      />
      <TableItem
        options={{ title: "Punt Net Yards", stat: team.PuntNetYards }}
      />
      <TableItem
        options={{ title: "Punt Return Long", stat: team.PuntReturnLong }}
      />
      <TableItem
        options={{
          title: "Punt Return Touchdowns",
          stat: team.PuntReturnTouchdowns,
        }}
      />
      <TableItem
        options={{ title: "Punts Had Blocked", stat: team.PuntsHadBlocked }}
      />

      <TableItem
        options={{
          title: "Extra Point Kicking Attempts",
          stat: team.ExtraPointKickingAttempts,
        }}
      />
      <TableItem
        options={{
          title: "Extra Point Kicking Conversions",
          stat: team.ExtraPointKickingConversions,
        }}
      />
      <TableItem
        options={{
          title: "Extra Point Rushing Attempts",
          stat: team.ExtraPointRushingAttempts,
        }}
      />
      <TableItem
        options={{
          title: "Extra Point Rushing Conversions",
          stat: team.ExtraPointRushingConversions,
        }}
      />
      <TableItem
        options={{
          title: "Extra Point Passing Attempts",
          stat: team.ExtraPointPassingAttempts,
        }}
      />
      <TableItem
        options={{
          title: "Extra Point Passing Conversions",
          stat: team.ExtraPointPassingConversions,
        }}
      />
      <TableItem
        options={{
          title: "Extra Points Had Blocked",
          stat: team.ExtraPointsHadBlocked,
        }}
      />
      <TableItem
        options={{ title: "Blocked Kicks", stat: team.BlockedKicks }}
      />
      <TableItem
        options={{
          title: "Blocked Kick Return Touchdowns",
          stat: team.BlockedKickReturnTouchdowns,
        }}
      />
      <TableItem
        options={{
          title: "Blocked Kick Return Yards",
          stat: team.BlockedKickReturnYards,
        }}
      />

      <TableItem
        options={{ title: "Field Goal Attempts", stat: team.FieldGoalAttempts }}
      />
      <TableItem
        options={{
          title: "Field Goal Return Touchdowns",
          stat: team.FieldGoalReturnTouchdowns,
        }}
      />
      <TableItem
        options={{
          title: "Field Goal Return Yards",
          stat: team.FieldGoalReturnYards,
        }}
      />
      <TableItem
        options={{
          title: "Field Goals Had Blocked",
          stat: team.FieldGoalsHadBlocked,
        }}
      />
      <TableItem
        options={{ title: "Field Goals Made", stat: team.FieldGoalsMade }}
      />
      <TableItem options={{ title: "Return Yards", stat: team.ReturnYards }} />
    </dt>
  );
}
