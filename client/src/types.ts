export type Game = {
  GameKey: string;
  SeasonType: number;
  Season: 2022;
  Week: number;
  Date: string;
  AwayTeam: string; // "BUF"
  HomeTeam: string; // "LAR"
  Channel: string; // "NBC"
  PointSpread: number;
  OverUnder: number;
  StadiumID: number;
  Canceled: false;
  GeoLat: unknown | null;
  GeoLong: unknown | null;
  ForecastTempLow: number;
  ForecastTempHigh: number;
  ForecastDescription: string;
  ForecastWindChill: number;
  ForecastWindSpeed: number;
  AwayTeamMoneyLine: number;
  HomeTeamMoneyLine: number;
  Day: string;
  DateTime: string;
  GlobalGameID: number;
  GlobalAwayTeamID: number;
  GlobalHomeTeamID: number;
  ScoreID: number;
  Status: string;
  StadiumDetails: StadiumDetails;
};
type StadiumDetails = {
  StadiumID: number;
  Name: string;
  City: string;
  State: string; // "CA"
  Country: string; // "USA"
  Capacity: number;
  PlayingSurface: string;
  GeoLat: number;
  GeoLong: number;
  Type: string; // Dome
};
