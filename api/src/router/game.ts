import { Router, Request, Response } from "express";
import { getGameByTeam, getTeamsDetails, getWeather } from "../utils/services";

const router = Router();

router.get("/:week/:gameId", async (req: Request, res: Response) => {
  const { week, gameId } = req.params;

  console.log("week and gameid,", week, gameId);

  const data = await getGameByTeam(week);
  const teams = await getTeamsDetails();
  const gameDetails = data.filter((g) => g.GlobalGameID == Number(gameId));
  const formatDetails = gameDetails.map((team) => {
    const teamDetails = teams.filter(
      (t) => t.GlobalTeamID === team.GlobalTeamID
    );
    return { ...team, ...teamDetails[0] };
  });
  const weather = await getWeather(
    formatDetails[0].HomeOrAway === "HOME"
      ? {
          lat: formatDetails[0].StadiumDetails.GeoLat,
          long: formatDetails[0].StadiumDetails.GeoLong,
        }
      : {
          lat: formatDetails[1].StadiumDetails.GeoLat,
          long: formatDetails[1].StadiumDetails.GeoLong,
        },
    formatDetails[0].Date.split("T")[0]
  );
  const formatWeather = weather.forecast.forecastday[0].hour.filter(
    (hour) => hour.time >= formatDetails[0].Date.split("T").join(" ")
  );
  res.json({ formatDetails, weather: formatWeather[0] });
});

export default router;
