import { useState, useEffect } from "react";
import { PlayerDetails, PlayerStats, TeamDetails } from "../utils/types";
import { useParams } from "react-router-dom";
import Stat from "../components/Stat";
import WeekSelect from "../components/WeekSelect";
import POffStats from "../components/POffStats";
import PDefStats from "../components/PDefStats";
import PSTStats from "../components/PSTStats";
import PGenStats from "../components/PGenStats";
import useTeamPage from "../hooks/useTeamPage";
import useTeamStats from "../hooks/useTeamStats";

function Home() {
  const statsData = useTeamStats();
  const teamData = useTeamPage();

  // useEffect(() => {
  //   if (teamslug) {
  //     statsData.teamStats.mutate({ team: teamslug, week: week });
  //   }
  // }, [week]);

  const statCards = {
    OFF: <POffStats player={statsData.activePlayer as PlayerStats} />,
    DEF: <PDefStats player={statsData.activePlayer as PlayerStats} />,
    ST: <PSTStats player={statsData.activePlayer as PlayerStats} />,
  };

  return (
    <div className="px-2 flex flex-col justify-center items-center">
      {/* ********** Card Header *********** */}
      {teamData.teamData && (
        <div className={`flex flex-col md:flex-row rounded p-2 gap-4 mb-4`}>
          <div className="flex">
            <img
              className="h-36 w-36"
              src={teamData.teamData.data?.team.WikipediaLogoUrl}
              alt={"team logo"}
            />
            <div className="flex gap-6">
              <div className="flex flex-col gap-2 p-2">
                <h2 className="font-bold flex flex-col">
                  <span className="text-gray-400">
                    {teamData.teamData.data?.team.City}
                  </span>
                  <span className="text-4xl">
                    {teamData.teamData.data?.team.Name}
                  </span>
                </h2>
                <div className="flex gap-4">
                  <Stat
                    options={{
                      title: "OFF",
                      stat: teamData.teamData.data?.team
                        .OffensiveScheme as string,
                    }}
                  />
                  <Stat
                    options={{
                      title: "DEF",
                      stat: teamData.teamData.data?.team
                        .DefensiveScheme as string,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-4 justify-center items-center md:items-start">
            <h2 className="text-xl font-bold pb-2 text-center md:text-left">
              {teamData.teamData.data?.team.StadiumDetails.Name}
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Stat
                  options={{
                    title: "Surface",
                    stat: teamData.teamData.data?.team.StadiumDetails
                      .PlayingSurface as string,
                  }}
                />
                <Stat
                  options={{
                    title: "Stadium",
                    stat: teamData.teamData.data?.team.StadiumDetails.Type.replace(
                      /([A-Z])/g,
                      " $1"
                    ) as string,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <WeekSelect
        weeks={[
          "week1",
          "week2",
          "week3",
          "week4",
          "week5",
          "week6",
          "week7",
          "week8",
          "week9",
          "week10",
          "week11",
          "week12",
          "week13",
          "week14",
          "week15",
          "week16",
          "week17",
          "week18",
        ]}
        state={{ variable: statsData.week, setter: statsData.setWeek }}
        showTeams={true}
      />
      {/* ************ player stats ************ */}
      {statsData.activePlayer && (
        <div className="py-2 px-4 rounded mb-4">
          <h2 className="text-2xl text-center font-bold mb-4">
            {statsData.activePlayer.Name} #{statsData.activePlayer.Number}
          </h2>
          <div className="flex justify-around flex-col sm:flex-row gap-4">
            <PGenStats player={statsData.activePlayer as PlayerStats} />

            {statCards[statsData.activePlayer.PositionCategory]}
            {statsData.activePlayer.PositionCategory !== "ST" && (
              <PSTStats player={statsData.activePlayer as PlayerStats} />
            )}
          </div>
        </div>
      )}
      {/* ************ position select ************ */}
      <div className="flex flex-wrap gap-2">
        {teamData.teamData.data &&
          teamData.active &&
          Object.keys(teamData.teamData.data.players).map((position) => (
            <div
              className={`hover:cursor-pointer bg-slate-900 rounded py-2 w-10 sm:w-12 mx-auto font-bold text-center ${
                teamData.active && teamData.active[0].Position === position
                  ? "text-white bg-slate-700 border-2 border-white"
                  : "text-gray-400 hover:text-white hover:bg-slate-700"
              }`}
              onClick={() =>
                teamData.handleActive(
                  teamData.teamData.data?.players[position] as PlayerDetails[]
                )
              }
              key={position}
            >
              {position}
            </div>
          ))}
      </div>
      {/* ************ player select ************ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-4">
        {teamData.active &&
          statsData.teamStats.data &&
          teamData.active.map((player) => (
            <div
              onClick={() => {
                const playerSet = statsData.teamStats.data?.find(
                  (p) => p.PlayerID === player.PlayerID
                );
                statsData.handleActivePlayer(playerSet);
              }}
              className={`flex gap-2 px-2 pb-2 bg-slate-900 ${
                statsData.teamStats.data?.find(
                  (p) => p.PlayerID === player.PlayerID
                )
                  ? `${
                      statsData.activePlayer?.PlayerID === player.PlayerID
                        ? "border-2 border-white"
                        : "hover:cursor-pointer hover:bg-slate-700"
                    }`
                  : "opacity-50"
              }`}
              key={player.PlayerID}
            >
              <div className="h-full">
                <img src={player.PhotoUrl} alt="player headshot" />
              </div>
              <div>
                <div className="flex gap-4 pt-2">
                  <p className="font-bold text-xl">{player.Name}</p>
                  <span
                    className={`block rounded-full h-3 w-3 ${
                      player.Status === "Active" ? "bg-green-500" : ""
                    }${
                      player.Status === "Practice Squad" ? "bg-orange-400" : ""
                    }${player.Status.match("Injured") ? "bg-red-500" : ""}`}
                  />
                </div>
                <p>{player.Age}</p>
                <p>
                  {player.Height} - {player.Weight} lbs
                </p>
                {/* <p
                  className={`
                  ${player.Status === "Active" ? "text-green-500" : ""}
                  ${player.Status === "Practice Squad" ? "text-orange-400" : ""}
                  ${player.Status.match("Injured") ? "text-red-500" : ""}
                  `}
                >
                  {player.Status}
                </p> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;

/* 

// general
PlayerID: number; // 22686
GameKey: string; //	"202210135"
Team: string; //	"WAS"
Opponent: string; // "JAX"
HomeOrAway: string; // "HOME"
Number: number; // 2
Name: string; // "Dyami Brown"
Position: string; //"WR"
PositionCategory: string; // 	"OFF"

  OffensiveSnapsPlayed: number; //	2
  DefensiveSnapsPlayed: number; //	0
  SpecialTeamsSnapsPlayed: number; //	3
  OffensiveTeamSnaps: number; //	59
  DefensiveTeamSnaps: number; //	54
  SpecialTeamsTeamSnaps: number; //	17

Activated: number; //	1
Played: number; //	1
Started: number; //	0
Fumbles: number; //	0
FumblesLost: number; //	0
MiscSoloTackles: number; //	0
MiscAssistedTackles: number; //	0
ExtraPointsMade: number; //	0
TwoPointConversionPasses: number; //	0
TwoPointConversionRuns: number; //	0
TwoPointConversionReceptions: number; //	0
OffensiveTouchdowns: number; //	0
DefensiveTouchdowns: number; //	0
Touchdowns: number; //	0
FumblesOwnRecoveries: number; //	0
FumblesOutOfBounds: number; //	0
ShortName: string; //	"Dyami Brown"
  PlayingSurface: string; //	"Grass"
  IsGameOver: boolean; //	true
   MiscFumblesForced: number; //	0
  MiscFumblesRecovered: number; //	0
  SafetiesAllowed: number; // 0
  SnapCountsConfirmed: boolean; // true
  ScoringDetails: any[];
  
  Stadium: string; //	"FedEx Field"
Temperature: number; //	57
Humidity: number; //	77
WindSpeed: number; //	2
TeamID: number; //	35
OpponentID: number; //	15
Day: string; //	"2022-09-11T00:00:00"
DateTime: string; //	"2022-09-11T13:00:00"
GlobalGameID: number; //	18013
GlobalTeamID: number; //	35
GlobalOpponentID: number; //	15
ScoreID: number; //	18013
  
  // offense
  OffensiveFumbleRecoveryTouchdowns: unknown | null;

// PASSING
PassingYards: number; //	0
PassingAttempts: number; //	0
PassingCompletions: number; //	0
PassingCompletionPercentage: number; //	0
PassingYardsPerAttempt: number; //	0
PassingYardsPerCompletion: number; //	0
PassingTouchdowns: number; //	0
PassingRating: number; //	0
PassingLong: number; //	0

//RUSHING
RushingAttempts: number; //	0
RushingYards: number; //	0
RushingYardsPerAttempt: number; //	0
RushingTouchdowns: number; //	0
RushingLong: number; //	0


// defense
  Tackles: number; //	0
PassingInterceptions: number; //	0
PassingSacks: number; //	0
PassingSackYards: number; //	0
SoloTackles: number; //	0
AssistedTackles: number; //	0
TacklesForLoss: number; //	0
Sacks: number; //	0
SackYards: number; //	0
QuarterbackHits: number; //	0
PassesDefended: number; //	0
FumblesForced: number; //	0
FumblesRecovered: number; //	0
FumbleReturnYards: number; //	0
FumbleReturnTouchdowns: number; //	0
Interceptions: number; //	0
InterceptionReturnYards: number; //	0
InterceptionReturnTouchdowns: number; //	0


// special teams
BlockedKicks: number; //	0
SpecialTeamsSoloTackles: number; //	0
SpecialTeamsAssistedTackles: number; //	0
SpecialTeamsTouchdowns: number; //	0
 SpecialTeamsFumblesForced: number; //	0
  SpecialTeamsFumblesRecovered: number; //	0
  KickReturnFairCatches: number; //	0
PuntReturnFairCatches: number; //	0
PuntTouchbacks: number; //	0
PuntInside20: number; //	0
PuntNetAverage: number; //	0
ExtraPointsAttempted: number; //	0
BlockedKickReturnTouchdowns: number; //	0
FieldGoalReturnTouchdowns: number; //	0
Safeties: number; //	0

// RECEIVING
ReceivingTargets: number; //	0
Receptions: number; //	0
ReceivingYards: number; //	0
ReceivingYardsPerReception: number; //	0
ReceivingTouchdowns: number; //	0
ReceivingLong: number; //	0
ReceivingYardsPerTarget: number; //	0
ReceptionPercentage: number; //	0

// KICKING
KickReturns: number; //	0
KickReturnYards: number; //	0
KickReturnYardsPerAttempt: number; //	0
KickReturnTouchdowns: number; //	0
KickReturnLong: number; //	0
BlockedKickReturnYards: number; //	0

// PUNTING
PuntReturns: number; //	0
PuntReturnYards: number; //	0
PuntReturnYardsPerAttempt: number; //	0
PuntReturnTouchdowns: number; //	0
PuntReturnLong: number; //	0
Punts: number; //	0
PuntYards: number; //	0
PuntAverage: number; //	0
PuntsHadBlocked: number; //	0
PuntLong: number; //	0
PuntNetYards: number; //	0

// FIELD GOALS
FieldGoalsAttempted: number; //	0
FieldGoalsMade: number; //	0
FieldGoalsLongestMade: number; //	0
FieldGoalPercentage: number; //	0
FieldGoalsHadBlocked: number; //	0
ExtraPointsHadBlocked: number; //	0
FieldGoalReturnYards: number; //	0
FieldGoalsMade0to19: number; //	0
  FieldGoalsMade20to29: number; //	0
  FieldGoalsMade30to39: number; //	0
  FieldGoalsMade40to49: number; //	0
  FieldGoalsMade50Plus: number; //	0
  TwoPointConversionReturns: number; //	0

// other
Season: number; // 2022
SeasonType: number; //	1
GameDate: string; //	"2022-09-11T13:00:00"
Week: number; //	1
FantasyPoints: number; //	0
FantasyPointsPPR: number; //	0
FantasyPosition: string; //	"WR"
PlayerGameID: number; //	990828570
FanDuelSalary: number; //	3533
DraftKingsSalary: number; //	2304
FantasyDataSalary: number; //	2304
VictivSalary: boolean; //	null
  FantasyPointsFanDuel: number; //	0
  FantasyPointsDraftKings: number; //	0
  YahooSalary: number; //	6
  FantasyPointsYahoo: number; //	0
  InjuryStatus: string; //	"Scrambled"
  InjuryBodyPart: string; //	"Scrambled"
  InjuryStartDate: unknown | null;
  InjuryNotes: string; //	"Scrambled"
  FanDuelPosition: string; // "Scrambled"
  DraftKingsPosition: string; //	"Scrambled"
  YahooPosition: string; //	"Scrambled"
  OpponentRank: number; // 18
  OpponentPositionRank: number; //	18
  InjuryPractice: string; //	"Scrambled"
  InjuryPracticeDescription: string; // "Scrambled"
  DeclaredInactive: boolean; //	false
  FantasyDraftSalary: unknown | null;
  FantasyDraftPosition: unknown | null;
  FantasyPointsFantasyDraft: number; //	0
  
  

*/
