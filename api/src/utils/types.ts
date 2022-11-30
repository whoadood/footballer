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
export type TeamBase = {
  TeamID: number;
  Offense: PlayerBase[];
  Defense: PlayerBase[];
  SpecialTeams: PlayerBase[];
};
export type PlayerBase = {
  DepthChartID: number; // 141;
  TeamID: number;
  PlayerID: number;
  Name: string;
  PositionCategory: string; // "ST";
  Position: string; // "P";
  DepthOrder: number;
  Updated: string;
};
export type Standing = {
  Conference: "AFC" | "NFC";
  ConferenceLosses: number;
  ConferenceRank: number;
  ConferenceTies: number;
  ConferenceWins: number;
  Division: string;
  DivisionLosses: number;
  DivisionRank: number;
  DivisionTies: number;
  DivisionWins: number;
  GlobalTeamID: number;
  Losses: number;
  Name: string;
  NetPoints: number;
  Percentage: number;
  PointsAgainst: number;
  PointsFor: number;
  Season: number;
  SeasonType: number;
  Team: string;
  TeamID: number;
  Ties: number;
  Touchdowns: number;
  Wins: number;
};
export type TeamDetails = {
  Key: string; // "ARI"
  TeamID: number;
  PlayerID: number;
  City: string; // "Arizona"
  Name: string; // "Cardinals"
  Conference: string; // "NFC"
  Division: string; // "West"
  FullName: string; // "Arizona Cardinals"
  StadiumID: number;
  ByeWeek: number;
  AverageDraftPosition: number;
  AverageDraftPositionPPR: number;
  HeadCoach: string; // "Kliff Kingsbury"
  OffensiveCoordinator: string; // "Kliff Kingsbury"
  DefensiveCoordinator: string; // "Vance Joseph"
  SpecialTeamsCoach: string; // "Jeff Rodgers"
  OffensiveScheme: string; // "3WR"
  DefensiveScheme: string; // "3-4"
  UpcomingSalary: number;
  UpcomingOpponent: string; // "Scrambled"
  UpcomingOpponentRank: number;
  UpcomingOpponentPositionRank: number;
  UpcomingFanDuelSalary: unknown | null;
  UpcomingDraftKingsSalary: unknown | null;
  UpcomingYahooSalary: unknown | null;
  PrimaryColor: string; // "97233F"
  SecondaryColor: string; // "FFFFFF"
  TertiaryColor: string; // "000000"
  QuaternaryColor: unknown | null;
  WikipediaLogoUrl: string; // "https://upload.wikimedia.org/wikipedia/en/7/72/Arizona_Cardinals_logo.svg"
  WikipediaWordMarkUrl: string; // "https://upload.wikimedia.org/wikipedia/commons/0/04/Arizona_Cardinals_wordmark.svg"
  GlobalTeamID: number;
  DraftKingsName: string; // "Cardinals"
  DraftKingsPlayerID: number;
  FanDuelName: string; // "Arizona Cardinals"
  FanDuelPlayerID: number;
  FantasyDraftName: string; // "Arizona Cardinals"
  FantasyDraftPlayerID: number;
  YahooName: string; // "Arizona Cardinals"
  YahooPlayerID: number;
  AverageDraftPosition2QB: number;
  AverageDraftPositionDynasty: number;
  StadiumDetails: StadiumDetails;
};
