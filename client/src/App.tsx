import { useState, useEffect } from "react";
import { Game } from "./types";

function App() {
  const [data, setData] = useState<Game[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:5000/");
        const d = await res.json();
        setData(d);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };
    getData();
  }, []);

  return (
    <div className="bg-slate-800 min-h-screen text-white">
      <h2>hello</h2>
      <ul>
        {data &&
          data.map((game: Game) => {
            console.log("game ", game);
            return (
              <li className={`$${game.GlobalGameID}`} key={game.GlobalGameID}>
                {game.AwayTeam} vs {game.HomeTeam}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
