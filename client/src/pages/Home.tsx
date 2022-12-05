import Standings from "../components/Standings";
import Schedule from "../components/Schedule";
import useHomePage from "../hooks/useHomePage";

function Home() {
  const home = useHomePage();

  return (
    <>
      {home.data?.schedule && <Schedule schedule={home.data.schedule} />}
      {home.data?.standings && <Standings standings={home.data.standings} />}
    </>
  );
}

export default Home;
