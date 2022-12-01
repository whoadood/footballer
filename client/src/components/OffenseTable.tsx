import React from "react";
import { GameDetails, TeamDetails } from "../types";
import TableItem from "./TableItem";

/* 
CompletionPercentage: 40.6​​
FirstDowns: 13
FirstDownsByPassing: 3
FirstDownsByPenalty: 4
FirstDownsByRushing: 4
FourthDownAttempts: 0
FourthDownConversions: 0
FourthDownPercentage: 0
GoalToGoAttempts: 0​
GoalToGoConversions: 0
GoalToGoPercentage: 0
OffensivePlays: 48
OffensiveYards: 176
OffensiveYardsPerPlay: 2.7
PasserRating: 70.5
PassingAttempts: 15
PassingCompletions:  6
PassingDropbacks: 16
PassingInterceptions: 1
PassingTouchdowns: 1
PassingYards: 91
PassingYardsPerAttempt: 4.6
PassingYardsPerCompletion: 11.3
PassesDefended: 2
RedZoneAttempts: 1
RedZoneConversions: 1
RedZonePercentage: 86.2
RushingAttempts: 32
RushingTouchdowns: 1
RushingYards: 85
RushingYardsPerAttempt: 2

*/

export default function Offense({ team }: { team: GameDetails & TeamDetails }) {
  return (
    <dt>
      <TableItem
        options={{ title: "Offensive Plays", stat: team.OffensivePlays }}
      />
      <TableItem
        options={{ title: "Offensive Yards", stat: team.OffensiveYards }}
      />
      <TableItem
        options={{
          title: "Offensive Yards per Play",
          stat: team.OffensiveYardsPerPlay,
        }}
      />
      <TableItem
        options={{ title: "Rushing Attempts", stat: team.RushingAttempts }}
      />
      <TableItem
        options={{ title: "Rushing Touchdowns", stat: team.RushingTouchdowns }}
      />
      <TableItem
        options={{ title: "Rushing Yards", stat: team.RushingYards }}
      />
      <TableItem
        options={{
          title: "Rushing Yards per Attempt",
          stat: team.RushingYardsPerAttempt,
        }}
      />
      <TableItem
        options={{ title: "Completion %", stat: team.CompletionPercentage }}
      />
      <TableItem
        options={{ title: "Passer Rating", stat: team.PasserRating }}
      />
      <TableItem
        options={{ title: "Passing Attempts", stat: team.PassingAttempts }}
      />
      <TableItem
        options={{
          title: "Passing Completions",
          stat: team.PassingCompletions,
        }}
      />
      <TableItem
        options={{ title: "Passing Dropbacks", stat: team.PassingDropbacks }}
      />
      <TableItem
        options={{
          title: "Passing Interceptions",
          stat: team.PassingInterceptions,
        }}
      />
      <TableItem
        options={{ title: "Passing Touchdowns", stat: team.PassingTouchdowns }}
      />
      <TableItem
        options={{ title: "Passing Yards", stat: team.PassingYards }}
      />
      <TableItem
        options={{
          title: "Passing Yards per Attempt",
          stat: team.PassingYardsPerAttempt,
        }}
      />
      <TableItem
        options={{
          title: "Passing Yards per Completion",
          stat: team.PassingYardsPerCompletion,
        }}
      />
      <TableItem
        options={{ title: "Passes Defended", stat: team.PassesDefended }}
      />
      <TableItem options={{ title: "First Downs", stat: team.FirstDowns }} />
      <TableItem
        options={{
          title: "First Downs Passing",
          stat: team.FirstDownsByPassing,
        }}
      />
      <TableItem
        options={{
          title: "First Downs Rushing",
          stat: team.FirstDownsByRushing,
        }}
      />
      <TableItem
        options={{
          title: "First Downs Penalty",
          stat: team.FirstDownsByPenalty,
        }}
      />
      <TableItem
        options={{
          title: "Fourth Down Attempts",
          stat: team.FourthDownAttempts,
        }}
      />
      <TableItem
        options={{
          title: "Fourth Down Conversions",
          stat: team.FourthDownConversions,
        }}
      />
      <TableItem
        options={{ title: "Red Zone Attempts", stat: team.RedZoneAttempts }}
      />
      <TableItem
        options={{
          title: "Red Zone Conversions",
          stat: team.RedZoneConversions,
        }}
      />
      <TableItem
        options={{ title: "Red Zone Percentage", stat: team.RedZonePercentage }}
      />
      <TableItem
        options={{ title: "Goal Attempts", stat: team.GoalToGoAttempts }}
      />
      <TableItem
        options={{ title: "Goal Conversions", stat: team.GoalToGoConversions }}
      />
    </dt>
  );
}
