import { useState, useEffect } from "react";
import { PlayerDetails, PlayerStats, TeamDetails } from "../types";
import { useParams } from "react-router-dom";
import Stat from "../components/Stat";
import WeekSelect from "../components/WeekSelect";
import POffStats from "../components/POffStats";
import PDefStats from "../components/PDefStats";
import PSTStats from "../components/PSTStats";
import PGenStats from "../components/PGenStats";

function Home() {
  const [week, setWeek] = useState<string>("week1");
  const [active, setActive] = useState<PlayerDetails[] | null>(null);
  const [team, setTeam] = useState<TeamDetails | null>(null);
  const [data, setData] = useState<Record<string, PlayerDetails[]> | null>(
    null
  );
  const [activePlayer, setActivePlayer] = useState<PlayerStats | null>(null);
  const [stats, setStats] = useState<PlayerStats[] | null>(null);
  const { teamslug } = useParams();

  const statCards = {
    OFF: <POffStats player={activePlayer as PlayerStats} />,
    DEF: <PDefStats player={activePlayer as PlayerStats} />,
    ST: <PSTStats player={activePlayer as PlayerStats} />,
  };

  console.log("active team", team);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:5000/team", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ team: teamslug }),
        });
        const d = await res.json();
        // console.log("teamdata ", d);
        setData(d.players);
        setActive(d.players["QB"]);
        setTeam(d.team);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:5000/team/stats`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          week: week.replace("week", ""),
          team: teamslug,
        }),
      });
      const d: PlayerStats[] = await res.json();
      console.log("player stats", d);
      setStats(d);
      setActivePlayer(d.find((p) => p.Position === "QB") as PlayerStats);
    };
    getData();
  }, [week]);

  return (
    <div className="px-4">
      {team && (
        <div className="bg-slate-700 flex flex-col md:flex-row rounded p-2 gap-4 mb-4">
          {/* ********** Card Header *********** */}
          <div className="flex">
            <img
              className="h-36 w-36"
              src={team.WikipediaLogoUrl}
              alt={"team logo"}
            />
            <div className="flex gap-6">
              <div className="flex flex-col gap-2 p-2">
                <h2 className="font-bold flex flex-col">
                  <span className="text-gray-400">{team.City}</span>
                  <span className="text-4xl">{team.Name}</span>
                </h2>
                <div className="flex gap-4">
                  <Stat
                    options={{ title: "OFF", stat: team.OffensiveScheme }}
                  />
                  <Stat
                    options={{ title: "DEF", stat: team.DefensiveScheme }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-4 justify-center items-center md:items-start">
            <h2 className="text-xl font-bold pb-2 text-center md:text-left">
              {team.StadiumDetails.Name}
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Stat
                  options={{
                    title: "Surface",
                    stat: team.StadiumDetails.PlayingSurface,
                  }}
                />
                <Stat
                  options={{
                    title: "Stadium",
                    stat: team.StadiumDetails.Type.replace(/([A-Z])/g, " $1"),
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
        state={{ variable: week, setter: setWeek }}
      />
      {/* ************ player stats ************ */}
      {activePlayer && (
        <div className="py-2 px-4 bg-slate-900 rounded mb-4">
          <h2 className="text-2xl text-center font-bold mb-4">
            {activePlayer.Name} - {activePlayer.Number}
          </h2>
          <div className="flex gap-4">
            <PGenStats player={activePlayer as PlayerStats} />
            {statCards[activePlayer.PositionCategory]}
          </div>
        </div>
      )}
      {/* ************ player select ************ */}
      <div className="flex flex-wrap gap-2">
        {data &&
          active &&
          Object.keys(data).map((position) => (
            <div
              className={`hover:cursor-pointer bg-slate-900 rounded p-2 font-bold w-10 text-center ${
                active[0].Position === position
                  ? "text-white bg-slate-700"
                  : "text-gray-400 hover:text-white hover:bg-slate-700"
              }`}
              onClick={() => setActive(data[position])}
              key={position}
            >
              {position}
            </div>
          ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-4">
        {active &&
          stats &&
          active.map((player) => (
            <div
              onClick={() => {
                const playerSet = stats.find(
                  (p) => p.PlayerID === player.PlayerID
                );
                setActivePlayer((cur) => (playerSet ? playerSet : cur));
              }}
              className={`flex gap-2 px-2 pb-2 bg-slate-900 ${
                stats?.find((p) => p.PlayerID === player.PlayerID)
                  ? `${
                      activePlayer?.PlayerID === player.PlayerID
                        ? "border-2 border-white hover:cursor-pointer"
                        : "hover:cursor-pointer"
                    }`
                  : "opacity-50"
              }`}
              key={player.PlayerID}
            >
              <img src={player.PhotoUrl} alt="player headshot" />
              <div className="pt-2">
                <p className="font-bold text-xl">{player.Name}</p>
                <p>{player.Age}</p>
                <p>
                  {player.Height} - {player.Weight} lbs
                </p>
                <p
                  className={`
                  ${player.Status === "Active" ? "text-green-500" : ""}
                  ${player.Status === "Practice Squad" ? "text-orange-400" : ""}
                  ${player.Status.match("Injured") ? "text-red-500" : ""}
                  `}
                >
                  {player.Status}
                </p>
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
