import React, { useState } from "react";
import { Game, GameDetails, ScheduleType } from "../utils/types";
import { Link } from "react-router-dom";
import WeekSelect from "./WeekSelect";

// for comparison to game date
const today = new Date();

const formatDate = (date: string) => {
  const hour = date.split(":")[0];
  const rest = date.split(":").slice(1, 2);
  return `${Number(hour) > 12 ? Number(hour) - 12 : hour}:${rest}${
    Number(hour) > 12 ? "pm" : "am"
  }`;
};

export default function Schedule({ schedule }: { schedule: ScheduleType }) {
  const [active, setActive] = useState<
    | "week1"
    | "week2"
    | "week3"
    | "week4"
    | "week5"
    | "week6"
    | "week7"
    | "week8"
    | "week9"
    | "week10"
    | "week11"
    | "week12"
    | "week13"
    | "week14"
    | "week15"
    | "week16"
    | "week17"
    | "week18"
  >("week1");
  const weeks: [
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
    "week18"
  ] = [
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
  ];
  console.log("weeks schedule", weeks);
  //   .sort(
  //     (a, b) => Number(a.split("week")[0]) - Number(b.split("week")[0])
  //   );
  //   console.log("weeks", weeks);
  return (
    <div className="px-2">
      <WeekSelect
        weeks={weeks}
        state={{ variable: active, setter: setActive }}
      />
      {active && (
        <ul className="grid gap-2 grid-rows-5 bg-slate-900/50 p-2 rounded md:grid-rows-3 grid-cols-4 lg:grid-cols-7 md:grid-cols-6">
          {schedule[active].map((game, index) => {
            return (
              <li
                className={`bg-slate-900 flex flex-col rounded sm:px-4 py-2  ${
                  today < new Date(game.Date) || game.AwayTeam === "BYE"
                    ? "opacity-50 hover:bg-slate-500 hover:cursor-pointer hover:border-slate-200 border-2 border-slate-800"
                    : "hover:cursor-pointer hover:border-slate-200 border-2 border-slate-800"
                }`}
                key={`${game.GlobalGameID} ${index}`}
              >
                <Link to={`games/${game.GlobalGameID}/${active}`}>
                  <h5 className="flex justify-center">
                    <p>{game.AwayTeam}</p>
                    <span className="text-sm mx-1 text-slate-400">v</span>
                    <p>{game.HomeTeam}</p>
                  </h5>
                  {game.Date && (
                    <>
                      <p className="text-center">
                        {game.Date.split("T")[0].replace("2022-", "")}
                      </p>
                      <p className="text-center">
                        {formatDate(game.Date.split("T")[1])}
                      </p>
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
