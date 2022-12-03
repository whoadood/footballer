import React, { useState } from "react";
import { Game, GameDetails, ScheduleType } from "../types";
import { Link } from "react-router-dom";
import WeekSelect from "./WeekSelect";

// for comparison to game date
const today = new Date();

export default function Schedule({ schedule }: { schedule: ScheduleType }) {
  const [active, setActive] = useState<string>("week1");
  const weeks = Object.keys(schedule);
  //   .sort(
  //     (a, b) => Number(a.split("week")[0]) - Number(b.split("week")[0])
  //   );
  //   console.log("weeks", weeks);
  return (
    <div className="px-2">
      <h3>Schedule</h3>
      <WeekSelect
        weeks={weeks}
        state={{ variable: active, setter: setActive }}
      />
      {active && (
        <ul className="grid gap-2 grid-rows-5 md:grid-rows-3 grid-cols-4 lg:grid-cols-7 md:grid-cols-6">
          {schedule[active].map((game, index) => {
            return (
              <li
                className={`bg-slate-500 flex flex-col rounded sm:px-4 py-2  ${
                  today < new Date(game.Date) || game.AwayTeam === "BYE"
                    ? "opacity-50 hover:bg-slate-500 hover:cursor-pointer hover:border-slate-200 border-2 border-slate-800"
                    : "hover:cursor-pointer hover:border-slate-200 border-2 border-slate-800"
                }`}
                key={`${game.GlobalGameID} ${index}`}
              >
                <Link to={`games/${game.GlobalGameID}/${active}`}>
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
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
