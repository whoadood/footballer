import React from "react";
import { PlayerStats } from "../types";
import StatDisplay from "./StatDisplay";

export default function PGenStats({ player }: { player: PlayerStats }) {
  const snaps = {
    OFF: player.OffensiveSnapsPlayed,
    DEF: player.DefensiveSnapsPlayed,
    ST: player.SpecialTeamsSnapsPlayed,
  };
  const genStats = {
    conditions: [
      { title: "Humidity", stat: player.Humidity },
      { title: "Wind Speed", stat: player.WindSpeed },
      { title: "Temperature", stat: player.Temperature },
    ],
    game: [
      { title: "Opponent", stat: player.Opponent },
      { title: "Stadium", stat: player.Stadium },
      { title: "H or A", stat: player.HomeOrAway },
      { title: "Surface", stat: player.PlayingSurface },
    ],
    stats: [
      { title: "Snaps", stat: snaps[player.PositionCategory] },
      { title: "Touchdowns", stat: player.Touchdowns },
      { title: "Fumbles", stat: player.Fumbles },
      { title: "Safeties", stat: player.Safeties },
    ],
  };
  return (
    <div className="flex flex-col items-center gap-2 ">
      <StatDisplay props={{ title: "Game", stats: genStats.game }} />
      <StatDisplay props={{ title: "General", stats: genStats.stats }} />
      <StatDisplay
        props={{ title: "Conditions", stats: genStats.conditions }}
      />{" "}
    </div>
  );
}

// // general
// PlayerID: number; // 22686
// GameKey: string; //	"202210135"
// Team: string; //	"WAS"
// Opponent: string; // "JAX"
// HomeOrAway: string; // "HOME"
// Number: number; // 2
// Name: string; // "Dyami Brown"
// Position: string; //"WR"
// PositionCategory: string; // "OFF"

//   OffensiveSnapsPlayed: number; //	2
//   DefensiveSnapsPlayed: number; //	0
//   SpecialTeamsSnapsPlayed: number; //	3
//   OffensiveTeamSnaps: number; //	59
//   DefensiveTeamSnaps: number; //	54
//   SpecialTeamsTeamSnaps: number; //	17

// Activated: number; //	1
// Played: number; //	1
// Started: number; //	0
// Fumbles: number; //	0
// FumblesLost: number; //	0
// MiscSoloTackles: number; //	0
// MiscAssistedTackles: number; //	0
// ExtraPointsMade: number; //	0
// TwoPointConversionPasses: number; //	0
// TwoPointConversionRuns: number; //	0
// TwoPointConversionReceptions: number; //	0
// OffensiveTouchdowns: number; //	0
// DefensiveTouchdowns: number; //	0
// Touchdowns: number; //	0
// FumblesOwnRecoveries: number; //	0
// FumblesOutOfBounds: number; //	0
// ShortName: string; //	"Dyami Brown"
//   PlayingSurface: string; //	"Grass"
//   IsGameOver: boolean; //	true
//    MiscFumblesForced: number; //	0
//   MiscFumblesRecovered: number; //	0
//   SafetiesAllowed: number; // 0
//   SnapCountsConfirmed: boolean; // true
//   ScoringDetails: any[];

//   Stadium: string; //	"FedEx Field"
// Temperature: number; //	57
// Humidity: number; //	77
// WindSpeed: number; //	2
// TeamID: number; //	35
// OpponentID: number; //	15
// Day: string; //	"2022-09-11T00:00:00"
// DateTime: string; //	"2022-09-11T13:00:00"
// GlobalGameID: number; //	18013
// GlobalTeamID: number; //	35
// GlobalOpponentID: number; //	15
// ScoreID: number; //	18013
