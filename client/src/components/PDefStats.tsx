import React from "react";
import { PlayerStats } from "../utils/types";
import StatDisplay from "./StatDisplay";

export default function PDefStats({ player }: { player: PlayerStats }) {
  const defStats = {
    general: [
      { title: "Tackles", stat: player.Tackles },
      { title: "Tackles for Loss", stat: player.TacklesForLoss },
      { title: "Solo", stat: player.SoloTackles },
      { title: "Assisted", stat: player.AssistedTackles },
      { title: "Sacks", stat: player.Sacks },
      { title: "Sack Yards", stat: player.SackYards },
      { title: "QB Hits", stat: player.QuarterbackHits },
      { title: "Passes Defended", stat: player.PassesDefended },
    ],
    interceptions: [
      { title: "Interceptions", stat: player.Interceptions },
      { title: "Return Yards", stat: player.InterceptionReturnYards },
      { title: "TDs", stat: player.InterceptionReturnTouchdowns },
    ],
    fumbles: [
      { title: "Forced", stat: player.FumblesForced },
      { title: "Recovered", stat: player.FumblesRecovered },
      { title: "Return Yards", stat: player.FumbleReturnYards },
      { title: "TDs", stat: player.FumbleReturnTouchdowns },
    ],
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <StatDisplay props={{ title: "General", stats: defStats.general }} />
      <StatDisplay
        props={{ title: "Interceptions", stats: defStats.interceptions }}
      />
      <StatDisplay props={{ title: "Fumbles", stats: defStats.fumbles }} />
    </div>
  );
}
// // defense
//   Tackles: number; //	0
// TacklesForLoss: number; //	0
// SoloTackles: number; //	0
// AssistedTackles: number; //	0
// Sacks: number; //	0
// SackYards: number; //	0
// QuarterbackHits: number; //	0

// PassingInterceptions: number; //	0
// PassingSacks: number; //	0
// PassingSackYards: number; //	0
// PassesDefended: number; //	0

// FumblesForced: number; //	0
// FumblesRecovered: number; //	0
// FumbleReturnYards: number; //	0
// FumbleReturnTouchdowns: number; //	0

// Interceptions: number; //	0
// InterceptionReturnYards: number; //	0
// InterceptionReturnTouchdowns: number; //	0
