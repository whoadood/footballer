import { Request, Router, Response } from "express";
import {
  getTeamsDetails,
  getTeamPlayers,
  getPlayerStats,
} from "../utils/services";
import { PlayerDetails } from "../utils/types";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { team } = req.body;
  const teams = await getTeamsDetails();
  const teamDetails = teams.filter((t) => t.Key === team);
  const players = await getTeamPlayers(team);

  const formatPlayers = players.reduce(
    (acc: Record<string, PlayerDetails[]>, cur) => {
      if (acc[cur.Position]) {
        acc[cur.Position].push(cur);
      } else {
        acc[cur.Position] = [cur];
      }
      return acc;
    },
    {}
  );
  res.json({ players: formatPlayers, team: teamDetails[0] });
});

router.post("/stats", async (req: Request, res: Response) => {
  const { week, team } = req.body;
  const playerStats = await getPlayerStats(week, team);
  res.json(playerStats);
});

export default router;
