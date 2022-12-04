import React from "react";

export default function WeekSelect({
  weeks,
  state,
  showTeams,
}: {
  weeks: any[];
  state: {
    variable: string;
    setter: React.Dispatch<React.SetStateAction<string>>;
  };
  showTeams: boolean;
}) {
  return (
    <div className={`py-2 grid grid-cols-6 grid-rows-2 md:grid-cols-9 gap-2`}>
      {weeks.map((k: any, i: number) => {
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
            <h4>Week {i + 1}</h4>
          </div>
        );
      })}
    </div>
  );
}
