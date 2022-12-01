import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="bg-slate-800 min-h-screen py-4 text-white max-w-screen ">
      <div className="max-w-7xl mx-auto">
        <Link to={"/"} className="flex">
          <h2 className="mb-4 hover:cursor-pointer hover:scale-110">
            Foot Baller
          </h2>
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
