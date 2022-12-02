import { useState, useEffect } from "react";
import { ScheduleType, Standing, TeamDetails } from "../types";
import Standings from "../components/Standings";
import Schedule from "../components/Schedule";

function Home() {
  const [data, setData] = useState<{
    schedule: ScheduleType;
    standings: (Standing & TeamDetails)[];
  } | null>(null);
  // const [active, setActive] = useState<[GameDetails, GameDetails] | null>(null);
  // const [team, setTeam] = useState<any | null>(null);

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
    <>
      {data?.schedule && <Schedule schedule={data.schedule} />}
      {data?.standings && <Standings standings={data.standings} />}
    </>
  );
}

export default Home;
