import React, { useState } from "react";
import { Game, GameDetails, ScheduleType } from "../types";

// for comparison to game date
const today = new Date();

export default function Schedule({ schedule }: { schedule: ScheduleType }) {
  const [active, setActive] = useState<string>("week1");

  const getGameData = async (week: string, teamId: number) => {
    try {
      const res = await fetch("http://localhost:5000/game", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ week, teamId }),
      });
      const d: GameDetails = await res.json();

      console.log("thisGame: ", d);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  const weeks = Object.keys(schedule);
  //   .sort(
  //     (a, b) => Number(a.split("week")[0]) - Number(b.split("week")[0])
  //   );
  //   console.log("weeks", weeks);
  return (
    <div className="px-2">
      <h3>Schedule</h3>
      <div className={`py-2 grid grid-cols-6 grid-rows-2 md:grid-cols-9 gap-2`}>
        {weeks.map((k, i) => {
          console.log(k, schedule[k]);
          return (
            <div
              onClick={() => setActive(k)}
              className={`py-2 px-2 hover:cursor-pointer text-center rounded ${
                active === k
                  ? "bg-slate-700 text-white"
                  : "bg-slate-900/30 text-gray-400 hover:text-white border-2 border-slate-800 hover:border-slate-200"
              }`}
              key={k}
            >
              <h4>Week {i + 1}</h4>
            </div>
          );
        })}
      </div>
      {active && (
        <ul className="my-4 grid gap-2 grid-rows-5 md:grid-rows-3 grid-cols-4 lg:grid-cols-7 md:grid-cols-6">
          {schedule[active].map((game, index) => {
            return (
              <li
                onClick={() => {
                  if (today < new Date(game.Date) || game.AwayTeam === "BYE")
                    return;
                  console.log("game", game);
                  getGameData(`${game.Week}`, game.GlobalHomeTeamID);
                }}
                className={`bg-slate-500 flex flex-col rounded sm:px-4 py-2  ${
                  today < new Date(game.Date) || game.AwayTeam === "BYE"
                    ? "opacity-50 hover:bg-slate-500 hover:cursor-pointer hover:border-slate-200 border-2 border-slate-800"
                    : "hover:cursor-pointer hover:border-slate-200 border-2 border-slate-800"
                }`}
                key={`${game.GlobalGameID} ${index}`}
              >
                <h5 className="flex justify-center">
                  <p>{game.AwayTeam}</p>
                  <span className="mx-2">vs</span>
                  <p>{game.HomeTeam}</p>
                </h5>
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
      )}
    </div>
  );
}
