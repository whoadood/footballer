import React from "react";
import { PlayerStats } from "../utils/types";
import StatDisplay from "./StatDisplay";

export default function POffStats({ player }: { player: PlayerStats }) {
  const offStats = {
    passing: [
      { title: "Yards", stat: player.PassingYards },
      { title: "Attempts", stat: player.PassingAttempts },
      { title: "Completions", stat: player.PassingCompletions },
      { title: "Completion %", stat: player.PassingCompletionPercentage },
      { title: "Yards/Attempt", stat: player.PassingYardsPerAttempt },
      { title: "Yards/Completion", stat: player.PassingYardsPerCompletion },
      { title: "TDs", stat: player.PassingTouchdowns },
      { title: "Rating", stat: player.PassingRating },
      { title: "Long", stat: player.PassingLong },
    ],
    rushing: [
      { title: "Attempts", stat: player.RushingAttempts },
      { title: "Yards", stat: player.RushingYards },
      { title: "Yards/Attempt", stat: player.RushingYardsPerAttempt },
      { title: "TDs", stat: player.RushingTouchdowns },
      { title: "Long", stat: player.RushingLong },
    ],
    receiving: [
      { title: "Targets", stat: player.ReceivingTargets },
      { title: "Receptions", stat: player.Receptions },
      { title: "Yards", stat: player.ReceivingYards },
      { title: "Reception %", stat: player.ReceptionPercentage },
      { title: "Yards/Receptions", stat: player.ReceivingYardsPerReception },
      { title: "Yards/Target", stat: player.ReceivingYardsPerTarget },
      { title: "TDs", stat: player.ReceivingTouchdowns },
      { title: "Long", stat: player.ReceivingLong },
    ],
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {player.Position === "QB" && (
        <StatDisplay props={{ title: "Passing", stats: offStats.passing }} />
      )}
      {player.Position === "WR" || player.Position === "TE" ? (
        <StatDisplay
          props={{ title: "Receiving", stats: offStats.receiving }}
        />
      ) : (
        <StatDisplay props={{ title: "Rushing", stats: offStats.rushing }} />
      )}
    </div>
  );
}

//   // offense
//   OffensiveFumbleRecoveryTouchdowns: unknown | null;

// // PASSING
// PassingYards: number; //	0
// PassingAttempts: number; //	0
// PassingCompletions: number; //	0
// PassingCompletionPercentage: number; //	0
// PassingYardsPerAttempt: number; //	0
// PassingYardsPerCompletion: number; //	0
// PassingTouchdowns: number; //	0
// PassingRating: number; //	0
// PassingLong: number; //	0

// //RUSHING
// RushingAttempts: number; //	0
// RushingYards: number; //	0
// RushingYardsPerAttempt: number; //	0
// RushingTouchdowns: number; //	0
// RushingLong: number; //	0

// // RECEIVING
// ReceivingTargets: number; //	0
// Receptions: number; //	0
// ReceivingYards: number; //	0
// ReceivingYardsPerReception: number; //	0
// ReceivingTouchdowns: number; //	0
// ReceivingLong: number; //	0
// ReceivingYardsPerTarget: number; //	0
// ReceptionPercentage: number; //	0
