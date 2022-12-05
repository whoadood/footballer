import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ScheduleType, Standing, TeamDetails } from "../utils/types";

const fetchHome = async (): Promise<{
  schedule: ScheduleType;
  standings: (Standing & TeamDetails)[];
}> => {
  const res = await fetch("http://localhost:5000/");
  if (!res.ok) throw new Error("Error fetching data for /");
  return res.json();
};

export default function useHomePage() {
  const homePageData = useQuery(["home"], fetchHome, {
    staleTime: 60 * 1000 * 60 * 2,
  });
  return homePageData;
}
