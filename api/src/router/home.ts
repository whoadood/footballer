import { Router, Request, Response } from "express";
import {
  getTeamsDetails,
  getSchedule,
  getLeagueStandings,
} from "../utils/services";
import { Schedule } from "../utils/types";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  console.log("ping /home");
  const teams = await getTeamsDetails();
  const schedule = await getSchedule();
  const standings = await getLeagueStandings();
  const teamsStandings = standings.map((team) => {
    const teamDetails = teams.filter(
      (t) => t.GlobalTeamID === team.GlobalTeamID
    );
    return { ...team, ...teamDetails[0] };
  });
  const formatSchedule: Schedule = schedule.reduce(
    (acc: any | Schedule, cur) => {
      if (acc[`week${cur.Week}`]) {
        acc[`week${cur.Week}`].push(cur);
      } else {
        acc[`week${cur.Week}`] = [cur];
      }
      return acc as Schedule;
    },
    {}
  );

  res.json({ standings: teamsStandings, schedule: formatSchedule });
});
export default router;
