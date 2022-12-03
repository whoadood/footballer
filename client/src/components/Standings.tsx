import React, { useState } from "react";
import { Standing, TeamDetails } from "../types";
import StandingCard from "./StandingCard";

export default function Standings({
  standings,
}: {
  standings: (Standing & TeamDetails)[];
}) {
  const [division, setDivision] = useState<"AFC" | "NFC">("AFC");
  const handleDivision = (d: string) => {
    if (d === "AFC") setDivision("AFC");
    if (d === "NFC") setDivision("NFC");
  };
  return (
    <div className="mb-4">
      <div className="">
        <div className="p-2">
          <h4 className="text-xl flex font-bold">
            {["AFC", "NFC"].map((d) => (
              <span
                key={d}
                onClick={() => handleDivision(d)}
                className={`p-2 rounded-tr ${
                  division === d
                    ? "rounded-t bg-slate-700 text-white"
                    : "bg-slate-900/30 text-gray-400 hover:text-white"
                } hover:cursor-pointer`}
              >
                {d}
              </span>
            ))}
          </h4>
          <div className="grid bg-slate-700 rounded-b rounded-tr p-2 grid-cols-3 md:grid-cols-4 gap-2">
            {standings
              .sort((a, b) => a.ConferenceRank - b.ConferenceRank)
              .map((team) => {
                if (team.Conference === division) {
                  return <StandingCard key={team.GlobalTeamID} team={team} />;
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
