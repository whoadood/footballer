import React from "react";
export default function WeekSelect({
  weeks,
  state,
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
    variable:
      | string
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
    setter: React.Dispatch<
      React.SetStateAction<
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
      >
    >;
  };
}) {
  return (
    <div className={`py-2 grid grid-cols-6 grid-rows-2 md:grid-cols-9 gap-2`}>
      {weeks.map((k, i) => {
        return (
          <div
            onClick={() => state.setter(k)}
            className={`py-2 px-2 text-center rounded ${
              state.variable === k
                ? "bg-slate-700 text-white border-2 border-white"
                : "bg-slate-900/30 text-gray-400 hover:text-white border-2 border-slate-800 hover:border-slate-200  hover:cursor-pointer"
            }`}
            key={k}
          >
            <h4>{`Week ${i + 1}`}</h4>
          </div>
        );
      })}
    </div>
  );
}
