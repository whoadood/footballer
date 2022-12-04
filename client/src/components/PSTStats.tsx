import React from "react";
import { PlayerStats } from "../types";
import StatDisplay from "./StatDisplay";

export default function PSTStats({ player }: { player: PlayerStats }) {
  const stStats = {
    punter: [
      { title: "Punts", stat: player.Punts },
      { title: "Yards", stat: player.PuntYards },
      { title: "Touchbacks", stat: player.PuntTouchbacks },
      { title: "Blocked", stat: player.PuntsHadBlocked },
      { title: "Avg", stat: player.PuntAverage },
      { title: "Punts in 20y", stat: player.PuntInside20 },
    ],
    kicker: [
      { title: "FG Attempted", stat: player.FieldGoalsAttempted },
      { title: "FG Made", stat: player.FieldGoalsMade },
      { title: "FG Longest Made", stat: player.FieldGoalsLongestMade },
      { title: "FG %", stat: player.FieldGoalPercentage },
      { title: "Blocked", stat: player.FieldGoalsHadBlocked },
      { title: "< 20y", stat: player.FieldGoalsMade0to19 },
      { title: "20y - 30y", stat: player.FieldGoalsMade20to29 },
      { title: "30y - 40y", stat: player.FieldGoalsMade30to39 },
      { title: "40y - 50y", stat: player.FieldGoalsMade40to49 },
      { title: "> 50y", stat: player.FieldGoalsMade50Plus },
    ],
    general: [
      { title: "Solo Tackles", stat: player.SoloTackles },
      { title: "Assistsed Tackles", stat: player.AssistedTackles },
      { title: "Safeties", stat: player.Safeties },
      { title: "TDs", stat: player.SpecialTeamsTouchdowns },
      { title: "Fumbles Forced", stat: player.SpecialTeamsFumblesForced },
      { title: "Fumbles Recovered", stat: player.SpecialTeamsFumblesRecovered },
    ],
    blocks: [
      { title: "Kicks", stat: player.BlockedKicks },
      { title: "Return Yards", stat: player.BlockedKickReturnYards },
      { title: "TDs", stat: player.BlockedKickReturnTouchdowns },
    ],

    puntReturns: [
      { title: "Returns", stat: player.PuntReturns },
      { title: "Yards", stat: player.PuntReturnYards },
      { title: "Fair Catch", stat: player.PuntReturnFairCatches },
      { title: "Yards per Attempt", stat: player.PuntReturnYardsPerAttempt },
      { title: "TDs", stat: player.PuntReturnTouchdowns },
      { title: "Long", stat: player.PuntReturnLong },
    ],
    kickReturns: [
      { title: "Returns", stat: player.KickReturns },
      { title: "Yards", stat: player.KickReturnYards },
      { title: "Fair Catch", stat: player.KickReturnFairCatches },
      { title: "Yards per Attempt", stat: player.KickReturnYardsPerAttempt },
      { title: "TDs", stat: player.KickReturnTouchdowns },
      { title: "Long", stat: player.KickReturnLong },
    ],
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <StatDisplay props={{ title: "Special Teams", stats: stStats.general }} />
      {player.PuntReturns < 1 && player.KickReturns < 1 && (
        <StatDisplay
          props={
            player.Position === "K"
              ? { title: "Kicks", stats: stStats.kicker }
              : player.Position === "P"
              ? { title: "Punts", stats: stStats.punter }
              : { title: "blocks", stats: stStats.blocks }
          }
        />
      )}
      {player.KickReturns > 0 && (
        <StatDisplay
          props={{ title: "Kick Returns", stats: stStats.kickReturns }}
        />
      )}
      {player.PuntReturns > 0 && (
        <StatDisplay
          props={{ title: "Punt Returns", stats: stStats.puntReturns }}
        />
      )}
    </div>
  );
}
// // special teams

// BlockedKicks: number; //	0
// BlockedKickReturnYards: number; //	0
// BlockedKickReturnTouchdowns: number; //	0

// SpecialTeamsSoloTackles: number; //	0
// SpecialTeamsAssistedTackles: number; //	0
// SpecialTeamsTouchdowns: number; //	0
// SpecialTeamsFumblesForced: number; //	0
// SpecialTeamsFumblesRecovered: number; //	0

// KickReturnFairCatches: number; //	0
// ExtraPointsAttempted: number; //	0
// FieldGoalReturnTouchdowns: number; //	0
// Safeties: number; //	0

// // KICKING
// KickReturns: number; //	0
// KickReturnYards: number; //	0
// KickReturnYardsPerAttempt: number; //	0
// KickReturnTouchdowns: number; //	0
// KickReturnLong: number; //	0

// FIELD GOALS
// FieldGoalsAttempted: number; //	0
// FieldGoalsMade: number; //	0
// FieldGoalsLongestMade: number; //	0
// FieldGoalPercentage: number; //	0
// FieldGoalsHadBlocked: number; //	0
// ExtraPointsHadBlocked: number; //	0

// FieldGoalReturnYards: number; //	0
// FieldGoalsMade0to19: number; //	0
// FieldGoalsMade20to29: number; //	0
// FieldGoalsMade30to39: number; //	0
// FieldGoalsMade40to49: number; //	0
// FieldGoalsMade50Plus: number; //	0
// TwoPointConversionReturns: number; //	0

// // PUNTING

// PuntReturns: number; //	0
// PuntReturnYards: number; //	0
// PuntReturnYardsPerAttempt: number; //	0
// PuntReturnTouchdowns: number; //	0
// PuntReturnLong: number; //	0
// PuntReturnFairCatches: number; //	0

// Punts: number; //	0
// PuntYards: number; //	0
// PuntAverage: number; //	0
// PuntsHadBlocked: number; //	0
// PuntLong: number; //	0
// PuntNetYards: number; //	0
// PuntTouchbacks: number; //	0
// PuntInside20: number; //	0
// PuntNetAverage: number; //	0
