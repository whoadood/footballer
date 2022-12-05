import { Router, Request, Response } from "express";
import { getDepthChart } from "../utils/services";
import { filterByPosition } from "../utils/data-manip";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  const data = await getDepthChart();
  const qb = filterByPosition(data, "QB");
  const wr = filterByPosition(data, "WR");
  const rb = filterByPosition(data, "RB");
  res.json({ qb, wr, rb });
});

export default router;
