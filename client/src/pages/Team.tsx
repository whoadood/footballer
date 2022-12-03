import { useState, useEffect } from "react";
import { PlayerDetails, TeamDetails } from "../types";
import { useParams } from "react-router-dom";

function Home() {
  const [active, setActive] = useState<PlayerDetails[] | null>(null);
  const [data, setData] = useState<Record<string, PlayerDetails[]> | null>(
    null
  );
  const { teamslug } = useParams();

  console.log("active players ", active);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:5000/team", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ team: teamslug }),
        });
        const d = await res.json();
        console.log("teamdata ", d);
        setData(d);
        setActive(d["QB"]);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };
    getData();
  }, []);

  return (
    <div className="px-4">
      <div className="flex flex-wrap gap-2">
        {data &&
          active &&
          Object.keys(data).map((position) => (
            <div
              className={`hover:cursor-pointer bg-slate-900 rounded p-2 font-bold w-10 text-center ${
                active[0].Position === position
                  ? "text-white bg-slate-700"
                  : "text-gray-400 hover:text-white hover:bg-slate-700"
              }`}
              onClick={() => setActive(data[position])}
              key={position}
            >
              {position}
            </div>
          ))}
      </div>
      <div className="flex flex-wrap gap-2 my-4">
        {active &&
          active.map((player) => (
            <div
              className="flex gap-2 pb-2 px-2  bg-slate-900"
              key={player.PlayerID}
            >
              <img src={player.PhotoUrl} alt="player headshot" />
              <div className="pt-2">
                <p className="font-bold text-xl">{player.Name}</p>
                <p>
                  {player.Height} - {player.Weight} lbs
                </p>
                <p
                  className={`
                  ${player.Status === "Active" ? "text-green-500" : ""}
                  ${player.Status === "Practice Squad" ? "text-orange-400" : ""}
                  ${player.Status.match("Injured") ? "text-red-500" : ""}
                  `}
                >
                  {player.Status}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
