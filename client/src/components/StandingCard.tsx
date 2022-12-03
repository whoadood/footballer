import React from "react";
import { Link } from "react-router-dom";
import { Standing, TeamDetails } from "../types";

export default function StandingCard({
  team,
}: {
  team: Standing & TeamDetails;
}) {
  return (
    <Link
      to={`teams/${team.Key}`}
      className="bg-slate-900 flex flex-col justify-between rounded first:col-span-3 md:first:col-span-1"
    >
      <div className="flex justify-between items-center p-2">
        <div className="flex flex-col sm:items-center sm:flex-row gap-2 ">
          <img
            className="h-8 w-8"
            src={team.WikipediaLogoUrl}
            alt="team logo"
          />
          <div>
            <p className="text-sm">{team.City}</p>
            <h4 className="font-bold">{team.Name}</h4>
          </div>
        </div>
        <p className="text-gray-400 text-sm hidden sm:block">{team.Division}</p>
      </div>
      <div className="bg-slate-800 border-2 border-slate-900 p-2">
        <p className="text-gray-400">
          wins: <span className="text-white">{team.Wins}</span>
        </p>
        <p className="text-gray-400">
          losses: <span className="text-white">{team.Losses}</span>
        </p>
        <p className="text-gray-400">
          ties: <span className="text-white">{team.Ties}</span>
        </p>
        <p className="text-gray-400 hidden sm:block">
          touchdowns: <span className="text-white">{team.Touchdowns}</span>
        </p>
        <p className="text-gray-400 sm:hidden">
          tds: <span className="text-white">{team.Touchdowns}</span>
        </p>
      </div>
    </Link>
  );
}
