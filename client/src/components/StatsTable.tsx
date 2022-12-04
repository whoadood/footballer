import React, { useState } from "react";
import { GameDetails, TeamDetails } from "../utils/types";
import Defense from "./DefenseTable";
import General from "./GeneralTable";
import Offense from "./OffenseTable";
import SpecialTeams from "./SpecialTeamsTable";

export default function StatsTable({
  team,
}: {
  team: GameDetails & TeamDetails;
}) {
  const [active, setActive] = useState<{ id: string; table: JSX.Element }>({
    id: "General",
    table: <General team={team} />,
  });

  return (
    <div className="px-2 py-4">
      <div className="flex">
        <div
          onClick={() =>
            setActive({ id: "General", table: <General team={team} /> })
          }
          className={`${
            active.id === "General"
              ? "bg-slate-800 rounded-t"
              : "bg-slate-600 text-gray-400"
          } rounded-tl hover:cursor-pointer hover:rounded-t hover:bg-slate-800/50 p-2`}
        >
          General
        </div>
        <div
          onClick={() =>
            setActive({ id: "Offense", table: <Offense team={team} /> })
          }
          className={`${
            active.id === "Offense"
              ? "bg-slate-800 rounded-t"
              : "bg-slate-600 text-gray-400"
          } hover:cursor-pointer hover:rounded-t hover:bg-slate-800/50 p-2`}
        >
          Offense
        </div>
        <div
          onClick={() =>
            setActive({ id: "Defense", table: <Defense team={team} /> })
          }
          className={`${
            active.id === "Defense"
              ? "bg-slate-800 rounded-t"
              : "bg-slate-600 text-gray-400"
          } hover:cursor-pointer hover:rounded-t hover:bg-slate-800/50 p-2`}
        >
          Defense
        </div>
        <div
          onClick={() =>
            setActive({
              id: "Special Teams",
              table: <SpecialTeams team={team} />,
            })
          }
          className={`${
            active.id === "Special Teams"
              ? "bg-slate-800 rounded-t"
              : "bg-slate-600 text-gray-400"
          } rounded-tr hover:cursor-pointer hover:rounded-t hover:bg-slate-800/50 p-2`}
        >
          Special Teams
        </div>
      </div>
      <div className="bg-slate-800">{active.table}</div>
    </div>
  );
}
