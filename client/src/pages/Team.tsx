import { useState, useEffect } from "react";
import { PlayerDetails, PlayerStats, TeamDetails } from "../types";
import { useParams } from "react-router-dom";
import Stat from "../components/Stat";
import WeekSelect from "../components/WeekSelect";

function Home() {
  const [week, setWeek] = useState<string>("week1");
  const [active, setActive] = useState<PlayerDetails[] | null>(null);
  const [team, setTeam] = useState<TeamDetails | null>(null);
  const [data, setData] = useState<Record<string, PlayerDetails[]> | null>(
    null
  );
  const [activePlayer, setActivePlayer] = useState<PlayerStats | null>(null);
  const [stats, setStats] = useState<PlayerStats[] | null>(null);
  const { teamslug } = useParams();

  console.log("active team", team);

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
        // console.log("teamdata ", d);
        setData(d.players);
        setActive(d.players["QB"]);
        setTeam(d.team);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:5000/team/stats`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          week: week.replace("week", ""),
          team: teamslug,
        }),
      });
      const d: PlayerStats[] = await res.json();
      console.log("player stats", d);
      setStats(d);
      setActivePlayer(d.find((p) => p.Position === "QB") as PlayerStats);
    };
    getData();
  }, [week]);

  return (
    <div className="px-4">
      {team && (
        <div className="bg-slate-700 flex flex-col md:flex-row rounded p-2 gap-4 mb-4">
          {/* ********** Card Header *********** */}
          <div className="flex">
            <img
              className="h-36 w-36"
              src={team.WikipediaLogoUrl}
              alt={"team logo"}
            />
            <div className="flex gap-6">
              <div className="flex flex-col gap-2 p-2">
                <h2 className="font-bold flex flex-col">
                  <span className="text-gray-400">{team.City}</span>
                  <span className="text-4xl">{team.Name}</span>
                </h2>
                <div className="flex gap-4">
                  <Stat
                    options={{ title: "OFF", stat: team.OffensiveScheme }}
                  />
                  <Stat
                    options={{ title: "DEF", stat: team.DefensiveScheme }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-4 justify-center items-center md:items-start">
            <h2 className="text-xl font-bold pb-2 text-center md:text-left">
              {team.StadiumDetails.Name}
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Stat
                  options={{
                    title: "Surface",
                    stat: team.StadiumDetails.PlayingSurface,
                  }}
                />
                <Stat
                  options={{
                    title: "Stadium",
                    stat: team.StadiumDetails.Type.replace(/([A-Z])/g, " $1"),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <WeekSelect
        weeks={[
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
        ]}
        state={{ variable: week, setter: setWeek }}
      />
      {activePlayer && <div>{activePlayer.Name}</div>}
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-4">
        {active &&
          stats &&
          active.map((player) => (
            <div
              onClick={() => {
                const playerSet = stats.find(
                  (p) => p.PlayerID === player.PlayerID
                );
                setActivePlayer((cur) => (playerSet ? playerSet : cur));
              }}
              className={`flex gap-2 px-2 pb-2 bg-slate-900 ${
                stats?.find((p) => p.PlayerID === player.PlayerID)
                  ? `${
                      activePlayer?.PlayerID === player.PlayerID
                        ? "border-2 border-white hover:cursor-pointer"
                        : "hover:cursor-pointer"
                    }`
                  : "opacity-50"
              }`}
              key={player.PlayerID}
            >
              <img src={player.PhotoUrl} alt="player headshot" />
              <div className="pt-2">
                <p className="font-bold text-xl">{player.Name}</p>
                <p>{player.Age}</p>
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
