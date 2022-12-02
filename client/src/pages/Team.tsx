import { useState, useEffect } from "react";
import { PlayerDetails, TeamDetails } from "../types";

function Home() {
  const [data, setData] = useState<PlayerDetails[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:5000/team", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ team: "WAS" }),
        });
        const d = await res.json();
        console.log("teamdata ", d);
        setData(d);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {data &&
        data.map((player) => (
          <div key={player.PlayerID}>
            {player.FirstName} {player.LastName} - {player.Position}
          </div>
        ))}
    </div>
  );
}

export default Home;
