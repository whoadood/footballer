import { useState, useEffect } from "react";
import { Game, GameDetails } from "./types";

// for comparison to game date
const today = new Date();

function App() {
  const [data, setData] = useState<Game[] | null>(null);
  const [active, setActive] = useState<[GameDetails, GameDetails] | null>(null);
  const [team, setTeam] = useState<any | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:5000/");
        const d = await res.json();
        console.log("game list ", d);
        setData(d);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };
    getData();
  }, []);

  const getTeamData = async (team: string) => {
    try {
      const res = await fetch("http://localhost:5000/team", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ team }),
      });
      const d = await res.json();
      console.log("getTeamData: ", d);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  const getGameData = async (
    week: string,
    gamekey: string,
    teams: { HOME: string; AWAY: string }
  ) => {
    try {
      setActive(null);
      const res = await fetch("http://localhost:5000/game", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ week }),
      });
      const d = await res.json();

      console.log("data: d: ", d);
      const thisGame = d.filter(
        (g: GameDetails) => g.GameKey === gamekey && teams[g.HomeOrAway]
      );
      console.log("thisGame: ", thisGame);

      setActive(thisGame);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  return (
    <div className="bg-slate-800 min-h-screen py-8 text-white max-w-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="my-4">Foot Baller</h2>
        <div>
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
        </div>
        <ul className="my-4 grid gap-2 grid-cols-6">
          {data &&
            data.map((game: Game, index) => {
              return (
                <li
                  onClick={() => {
                    if (today < new Date(game.Date) || game.AwayTeam === "BYE")
                      return;
                    console.log("game", game);
                    getGameData(`${game.Week}`, game.GameKey, {
                      HOME: game.HomeTeam,
                      AWAY: game.AwayTeam,
                    });
                  }}
                  className={`bg-slate-500 flex flex-col rounded px-4 py-2  ${
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
                  <p>{game.Date}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
