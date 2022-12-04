import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import General from "../components/GeneralTable";
import Offense from "../components/OffenseTable";
import Stat from "../components/Stat";
import StatsTable from "../components/StatsTable";
import TeamCard from "../components/TeamCard";
import { GameDetails, TeamDetails, Weather } from "../utils/types";

export default function GameStud() {
  const [data, setData] = useState<(GameDetails & TeamDetails)[] | null>(null);
  const [weather, setWeather] = useState<Weather | null>(null);
  const { gameId, week } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:5000/game", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            week: week?.replace("week", "").trim(),
            gameId,
          }),
        });
        const d = await res.json();
        console.log("game data: ", d);
        setData(d.formatDetails);
        setWeather(d.weather);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };
    getData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2">
      <div className="col-span-2">
        {/* 
		Stadium: "Soldier Field"
		Date: "2022-09-11T13:00:00"
		DayOfWeek: "Sunday"
		Humidity: 86
		OverUnder: 32.3
		PlayingSurface: "Grass"
		PointSpread: 4.8
		WindSPeed: 15 
	*/}
        {data && weather && (
          <div className="bg-slate-900 p-4 rounded flex flex-col-reverse md:flex-row gap-4 md:gap-2">
            <div className="mr-6 flex items-center">
              <img
                className="h-24 w-24 mr-4"
                src={weather.condition.icon}
                alt="weather icon"
              />
              <div>
                <p className="text-2xl mb-4 text-center font-bold">
                  {weather.condition.text}
                </p>
                <div className="flex gap-2">
                  <Stat
                    options={{ title: "Temp", stat: `${weather.temp_f} deg` }}
                  />
                  <Stat
                    options={{ title: "Wind Dir", stat: weather.wind_dir }}
                  />
                  <Stat
                    options={{
                      title: "Rain Chance",
                      stat: `${weather.chance_of_rain}%`,
                    }}
                  />
                  <Stat
                    options={{
                      title: "Snow Change",
                      stat: `${weather.chance_of_snow}%`,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold pb-2 text-center md:text-left">
                {data[0].Stadium}
              </h2>
              <div className="flex items-center flex-col gap-4">
                {data[0].Date && (
                  <div className="flex items-center gap-4">
                    <span>{data[0].DayOfWeek}</span>
                    <span>{data[0].Date.split("T")[0]}</span>{" "}
                    <span>{data[0].Date.split("T")[1]}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  {data[0].Humidity && (
                    <Stat
                      options={{ title: "Humidity", stat: data[0].Humidity }}
                    />
                  )}
                  <Stat
                    options={{ title: "Surface", stat: data[0].PlayingSurface }}
                  />
                  <Stat
                    options={{
                      title: "Wind Speed",
                      stat: `${data[0].WindSpeed ? data[0].WindSpeed : 0} mph`,
                    }}
                  />
                  <Stat
                    options={{
                      title: "Stadium",
                      stat:
                        data[0].StadiumID === data[0].StadiumDetails.StadiumID
                          ? data[0].StadiumDetails.Type.replace(
                              /([A-Z])/g,
                              " $1"
                            )
                          : data[1].StadiumDetails.Type.replace(
                              /([A-Z])/g,
                              " $1"
                            ),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {data &&
        data.map((team) => (
          <div
            key={team.GlobalTeamID}
            className="bg-slate-700 rounded col-span-2 md:col-span-1"
          >
            {/* ********** Card Header *********** */}
            <div className="flex items-center gap-6 mb-2 p-2">
              <img
                className="h-12 w-12"
                src={team.WikipediaLogoUrl}
                alt={"team logo"}
              />
              <Stat options={{ title: team.City, stat: team.TeamName }} />
              <Stat options={{ title: "OFF", stat: team.OffensiveScheme }} />
              <Stat options={{ title: "DEF", stat: team.DefensiveScheme }} />
              <p>{team.HomeOrAway}</p>
            </div>
            {/* ********** Score Stats *********** */}
            <div className="flex justify-around p-2 bg-slate-900 rounded-b">
              <Stat options={{ title: "Q1", stat: team.ScoreQuarter1 }} />
              <Stat options={{ title: "Q2", stat: team.ScoreQuarter2 }} />
              <Stat options={{ title: "Q3", stat: team.ScoreQuarter3 }} />
              <Stat options={{ title: "Q4", stat: team.ScoreQuarter4 }} />
              <Stat options={{ title: "OT", stat: team.ScoreOvertime }} />
              <Stat
                options={{
                  title: "FINAL",
                  stat:
                    team.ScoreQuarter1 +
                    team.ScoreQuarter2 +
                    team.ScoreQuarter3 +
                    team.ScoreQuarter4 +
                    team.ScoreOvertime,
                }}
              />
            </div>
            {/* ********** Stats *********** */}
            <StatsTable team={team} />
          </div>
        ))}
    </div>
  );
}

/* 

****** GENERAL STATS ******

Stadium: "Soldier Field"
Date: "2022-09-11T13:00:00"
DayOfWeek: "Sunday"
Humidity: 86
OverUnder: 32.3
PlayingSurface: "Grass"
PointSpread: 4.8
WindSPeed: 15

****** COACHES ******

HeadCoach: "Matt Eberflus"
OffensiveCoordinator: "Luke Getsy"
DefensiveCoordinator: "Alan Williams"
SpecialTeamsCoach: "Richard Hightower"


****** GENERAl TEAM STATS ******
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


****** OFFENSIVE STATS ******

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
PassingCompletions: 6
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


****** DEFENSIVE STATS ******

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


****** SPECIAL TEAMS STATS ******

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
PuntAverage: 39.8
PuntNetAverage: 0
PuntNetYards: 0
PuntReturnLong: 0
PuntReturnTouchdowns: 0
​​PuntReturnYards: 0
PuntReturns: 1
PuntYards: 239
Punts: 4
PuntsHadBlocked: 0
ReturnYards: 22

​​​​​​​​
****** SCORE ******
​​​​
ScoreOvertime: 0​​
ScoreQuarter1: 0
ScoreQuarter2: 0
ScoreQuarter3: 7
ScoreQuarter4: 12
​​​​
​
*/
