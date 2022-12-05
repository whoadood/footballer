import React from "react";
import useHomePage from "../hooks/useHomePage";
import { useParams } from "react-router-dom";
import { Game } from "../utils/types";

type Week =
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
  | "week18";

export default function WeekSelect({
  weeks,
  state,
  showTeams,
}: {
  weeks: [
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
  ];
  state: {
    variable: string | Week;
    setter: React.Dispatch<React.SetStateAction<Week>>;
  };
  showTeams: boolean;
}) {
  const { teamslug } = useParams();
  const homeData = useHomePage();
  const getGame = (week: Week) =>
    homeData.data?.schedule[week].filter(
      (g) => g.AwayTeam === teamslug || g.HomeTeam === teamslug
    )[0];

  const getOpponent = (week: Week) => {
    const game = getGame(week);
    return game?.AwayTeam === teamslug ? game?.HomeTeam : game?.AwayTeam;
  };

  const getIcon = (week: Week) => {
    const team = getOpponent(week);
    // return team;
    console.log("start", week);
    return homeData.data?.standings.filter((t) => t.Key === team)[0]
      ? homeData.data?.standings.filter((t) => t.Key === team)[0]
          .WikipediaLogoUrl
      : null;
  };

  return (
    <div className={`py-2 grid grid-cols-6 grid-rows-2 md:grid-cols-9 gap-2`}>
      {weeks.map((k, i) => {
        return (
          <div
            onClick={() => (getOpponent(k) === "BYE" ? null : state.setter(k))}
            className={`${
              showTeams ? "p-1" : "py-2 px-2"
            } text-center flex justify-center items-center rounded ${
              state.variable === k
                ? "bg-slate-700 text-white border-2 border-white"
                : `bg-slate-900/30 text-gray-400  border-2 border-slate-800  ${
                    getOpponent(k) === "BYE"
                      ? "opacity-50"
                      : "hover:border-slate-200  hover:cursor-pointer hover:text-white"
                  }`
            }`}
            key={k}
          >
            <h4>
              {showTeams ? (
                homeData.data?.schedule ? (
                  getIcon(k) ? (
                    <img
                      className="w-8"
                      src={getIcon(k) as string}
                      alt="opponent icon"
                    />
                  ) : (
                    getOpponent(k)
                  )
                ) : (
                  `Week ${i + 1}`
                )
              ) : (
                `Week ${i + 1}`
              )}
            </h4>
          </div>
        );
      })}
    </div>
  );
}
