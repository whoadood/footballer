import { useState, useEffect } from "react";
import { Game, GameDetails, Standing, TeamDetails } from "../types";
import StandingCard from "../components/StandingCard";

// for comparison to game date
const today = new Date();

function Home() {
  const [data, setData] = useState<{
    schedule: Game[];
    standings: (Standing & TeamDetails)[];
  } | null>(null);
  const [active, setActive] = useState<[GameDetails, GameDetails] | null>(null);
  const [team, setTeam] = useState<any | null>(null);
  if (data?.schedule) {
    console.log("weeks", data.schedule.length / 32);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:5000/");
        const d = await res.json();
        console.log("'/' data: ", d);
        setData(d);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };
    getData();
  }, []);

  // const getTeamData = async (team: string) => {
  //   try {
  //     const res = await fetch("http://localhost:5000/team", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({ team }),
  //     });
  //     const d = await res.json();
  //     console.log("getTeamData: ", d.week);
  //   } catch (err) {
  //     console.log("ERROR: ", err);
  //   }
  // };

  const getGameData = async (week: string, teamId: number) => {
    try {
      setActive(null);
      const res = await fetch("http://localhost:5000/game", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ week, teamId }),
      });
      const d: GameDetails = await res.json();

      console.log("thisGame: ", d.Week);

      // setActive(d);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  return (
    <div className="bg-slate-800 min-h-screen py-8 text-white max-w-screen ">
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="my-4">Foot Baller</h2>
        <div className="my-8">
          <h3>Standings</h3>
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-xl font-bold my-2 text-center">AFC</h4>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                {data?.standings
                  .sort((a, b) => a.ConferenceRank - b.ConferenceRank)
                  .map((team) => {
                    if (team.Conference === "AFC") {
                      return (
                        <StandingCard key={team.GlobalTeamID} team={team} />
                      );
                    }
                  })}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold my-2 text-center">NFC</h4>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                {data?.standings
                  .sort((a, b) => a.ConferenceRank - b.ConferenceRank)
                  .map((team) => {
                    if (team.Conference === "NFC") {
                      return (
                        <StandingCard key={team.GlobalTeamID} team={team} />
                      );
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          {active !== null && (
            <div>
              <h3>
                {active.map((t) => {
                  return (
                    <p
                      key={t.Team}
                      className="hover:cursor-pointer text-gray-400 hover:text-white font-bold"
                      onClick={() => {
                        getTeamData(t.Team);
                      }}
                    >
                      {t.TeamName} {t.Score}
                    </p>
                  );
                })}
              </h3>
            </div>
          )}
        </div> */}
        <div>
          <h3>Schedule</h3>
          <ul className="my-4 grid gap-2 grid-cols-4 lg:grid-cols-7 md:grid-cols-6">
            {data &&
              data?.schedule.map((game: Game, index) => {
                return (
                  <li
                    onClick={() => {
                      if (
                        today < new Date(game.Date) ||
                        game.AwayTeam === "BYE"
                      )
                        return;
                      console.log("game", game);
                      getGameData(`${game.Week}`, game.GlobalHomeTeamID);
                    }}
                    className={`bg-slate-500 flex flex-col rounded sm:px-4 py-2  ${
                      today < new Date(game.Date) || game.AwayTeam === "BYE"
                        ? "opacity-50 hover:bg-slate-500"
                        : "hover:cursor-pointer hover:bg-red-200"
                    }`}
                    key={`${game.GlobalGameID} ${index}`}
                  >
                    <h3 className="flex justify-center">
                      <p>{game.AwayTeam}</p>
                      <span className="mx-2">vs</span>
                      <p>{game.HomeTeam}</p>
                    </h3>
                    {game.Date && (
                      <>
                        <p className="text-center">{game.Date.split("T")[0]}</p>
                        <p className="text-center">{game.Date.split("T")[1]}</p>
                      </>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
