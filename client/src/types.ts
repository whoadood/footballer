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
export type GameDetails = {
  AssistedTackles: number;
  BlockedKickReturnTouchdowns: number;
  BlockedKickReturnYards: number;
  BlockedKicks: number;
  CompletionPercentage: number;
  Date: string; // "2022-09-11T16:25:00"
  DateTime: string; // "2022-09-11T16:25:00"
  Day: string; // "2022-09-11T00:00:00"
  DayOfWeek: string; // "Sunday"
  ExtraPointKickingAttempts: number;
  ExtraPointKickingConversions: number;
  ExtraPointPassingAttempts: number;
  ExtraPointPassingConversions: number;
  ExtraPointRushingAttempts: number;
  ExtraPointRushingConversions: number;
  ExtraPointsHadBlocked: number;
  FieldGoalAttempts: number;
  FieldGoalReturnTouchdowns: number;
  FieldGoalReturnYards: number;
  FieldGoalsHadBlocked: number;
  FieldGoalsMade: number;
  FirstDowns: number;
  FirstDownsByPassing: number;
  FirstDownsByPenalty: number;
  FirstDownsByRushing: number;
  FourthDownAttempts: number;
  FourthDownConversions: number;
  FourthDownPercentage: number;
  FumbleReturnTouchdowns: number;
  FumbleReturnYards: number;
  Fumbles: number;
  FumblesForced: number;
  FumblesLost: number;
  FumblesRecovered: number;
  GameKey: string; // "202210101"
  Giveaways: number;
  GlobalGameID: number; // 18018
  GlobalOpponentID: number;
  GlobalTeamID: number;
  GoalToGoAttempts: number;
  GoalToGoConversions: number;
  GoalToGoPercentage: number;
  HomeOrAway: "HOME" | "AWAY"; // "HOME"
  Humidity: number;
  InterceptionReturnTouchdowns: number;
  InterceptionReturnYards: number;
  InterceptionReturns: number;
  IsGameOver: boolean;
  KickReturnLong: number;
  KickReturnTouchdowns: number;
  KickReturnYards: number;
  KickReturns: number;
  KickoffTouchbacks: number;
  Kickoffs: number;
  KickoffsInEndZone: number;
  OffensivePlays: number;
  OffensiveYards: number;
  OffensiveYardsPerPlay: number;
  Opponent: string; // "KC"
  OpponentAssistedTackles: number;
  OpponentBlockedKickReturnTouchdowns: number;
  OpponentBlockedKickReturnYards: number;
  OpponentBlockedKicks: number;
  OpponentCompletionPercentage: number;
  OpponentExtraPointKickingAttempts: number;
  OpponentExtraPointKickingConversions: number;
  OpponentExtraPointPassingAttempts: number;
  OpponentExtraPointPassingConversions: number;
  OpponentExtraPointRushingAttempts: number;
  OpponentExtraPointRushingConversions: number;
  OpponentExtraPointsHadBlocked: number;
  OpponentFieldGoalAttempts: number;
  OpponentFieldGoalReturnTouchdowns: number;
  OpponentFieldGoalReturnYards: number;
  OpponentFieldGoalsHadBlocked: number;
  OpponentFieldGoalsMade: number;
  OpponentFirstDowns: number;
  OpponentFirstDownsByPassing: number;
  OpponentFirstDownsByPenalty: number;
  OpponentFirstDownsByRushing: number;
  OpponentFourthDownAttempts: number;
  OpponentFourthDownConversions: number;
  OpponentFourthDownPercentage: number;
  OpponentFumbleReturnTouchdowns: number;
  OpponentFumbleReturnYards: number;
  OpponentFumbles: number;
  OpponentFumblesForced: number;
  OpponentFumblesLost: number;
  OpponentFumblesRecovered: number;
  OpponentGiveaways: number;
  OpponentGoalToGoAttempts: number;
  OpponentGoalToGoConversions: number;
  OpponentGoalToGoPercentage: number;
  OpponentID: number;
  OpponentInterceptionReturnTouchdowns: number;
  OpponentInterceptionReturnYards: number;
  OpponentInterceptionReturns: number;
  OpponentKickReturnLong: number;
  OpponentKickReturnTouchdowns: number;
  OpponentKickReturnYards: number;
  OpponentKickReturns: number;
  OpponentKickoffTouchbacks: number;
  OpponentKickoffs: number;
  OpponentKickoffsInEndZone: number;
  OpponentOffensivePlays: number;
  OpponentOffensiveYards: number;
  OpponentOffensiveYardsPerPlay: number;
  OpponentPasserRating: number;
  OpponentPassesDefended: number;
  OpponentPassingAttempts: number;
  OpponentPassingCompletions: number;
  OpponentPassingDropbacks: number;
  OpponentPassingInterceptions: number;
  OpponentPassingTouchdowns: number;
  OpponentPassingYards: number;
  OpponentPassingYardsPerAttempt: number;
  OpponentPassingYardsPerCompletion: number;
  OpponentPenalties: number;
  OpponentPenaltyYards: number;
  OpponentPuntAverage: number;
  OpponentPuntNetAverage: number;
  OpponentPuntNetYards: number;
  OpponentPuntReturnLong: number;
  OpponentPuntReturnTouchdowns: number;
  OpponentPuntReturnYards: number;
  OpponentPuntReturns: number;
  OpponentPuntYards: number;
  OpponentPunts: number;
  OpponentPuntsHadBlocked: number;
  OpponentQuarterbackHits: number;
  OpponentQuarterbackHitsDifferential: number;
  OpponentQuarterbackHitsPercentage: number;
  OpponentQuarterbackSacksDifferential: number;
  OpponentRedZoneAttempts: number;
  OpponentRedZoneConversions: number;
  OpponentRedZonePercentage: number;
  OpponentReturnYards: number;
  OpponentRushingAttempts: number;
  OpponentRushingTouchdowns: number;
  OpponentRushingYards: number;
  OpponentRushingYardsPerAttempt: number;
  OpponentSackYards: number;
  OpponentSacks: number;
  OpponentSafeties: number;
  OpponentScore: number;
  OpponentScoreOvertime: number;
  OpponentScoreQuarter1: number;
  OpponentScoreQuarter2: number;
  OpponentScoreQuarter3: number;
  OpponentScoreQuarter4: number;
  OpponentSoloTackles: number;
  OpponentTacklesForLoss: number;
  OpponentTacklesForLossDifferential: number;
  OpponentTacklesForLossPercentage: number;
  OpponentTakeaways: number;
  OpponentThirdDownAttempts: number;
  OpponentThirdDownConversions: number;
  OpponentThirdDownPercentage: number;
  OpponentTimeOfPossession: string; // "34:42"
  OpponentTimeOfPossessionMinutes: number;
  OpponentTimeOfPossessionSeconds: number;
  OpponentTimesSacked: number;
  OpponentTimesSackedPercentage: number;
  OpponentTimesSackedYards: number;
  OpponentTouchdowns: number;
  OpponentTurnoverDifferential: number;
  OpponentTwoPointConversionReturns: number;
  OverUnder: number;
  PasserRating: number;
  PassesDefended: number;
  PassingAttempts: number;
  PassingCompletions: number;
  PassingDropbacks: number;
  PassingInterceptions: number;
  PassingTouchdowns: number;
  PassingYards: number;
  PassingYardsPerAttempt: number;
  PassingYardsPerCompletion: number;
  Penalties: number;
  PenaltyYards: number;
  PlayingSurface: string; // "Grass"
  PointSpread: number;
  PuntAverage: number;
  PuntNetAverage: number;
  PuntNetYards: number;
  PuntReturnLong: number;
  PuntReturnTouchdowns: number;
  PuntReturnYards: number;
  PuntReturns: number;
  PuntYards: number;
  Punts: number;
  PuntsHadBlocked: number;
  QuarterbackHits: number;
  QuarterbackHitsDifferential: number;
  QuarterbackHitsPercentage: number;
  QuarterbackSacksDifferential: number;
  RedZoneAttempts: number;
  RedZoneConversions: number;
  RedZonePercentage: number;
  ReturnYards: number;
  RushingAttempts: number;
  RushingTouchdowns: number;
  RushingYards: number;
  RushingYardsPerAttempt: number;
  SackYards: number;
  Sacks: number;
  Safeties: number;
  Score: number;
  ScoreID: number; // 18018
  ScoreOvertime: number;
  ScoreQuarter1: number;
  ScoreQuarter2: number;
  ScoreQuarter3: number;
  ScoreQuarter4: number;
  Season: number; // 2022
  SeasonType: number;
  SoloTackles: number;
  Stadium: string; // "State Farm Stadium"
  TacklesForLoss: number;
  TacklesForLossDifferential: number;
  TacklesForLossPercentage: number;
  Takeaways: number;
  Team: string; // 'ARI'
  TeamGameID: number;
  TeamID: number;
  TeamName: string; // "Cardinals"
  Temperature: number;
  ThirdDownAttempts: number;
  ThirdDownConversions: number;
  ThirdDownPercentage: number;
  TimeOfPossession: string; // "25:18"
  TimeOfPossessionMinutes: number;
  TimeOfPossessionSeconds: number;
  TimesSacked: number;
  TimesSackedPercentage: number;
  TimesSackedYards: number;
  TotalScore: number;
  Touchdowns: number;
  TurnoverDifferential: number;
  TwoPointConversionReturns: number;
  Week: number;
  WindSpeed: number;
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
export type ScheduleType = Record<string, Game[]>;
export type Weather = {
  time_epoch: number; // 1668751200
  time: string; // "2022-11-18 00:00"
  temp_c: number; // -3.1
  temp_f: number; // 26.4
  is_day: number; // 0
  condition: {
    text: string; // "Light snow showers"
    icon: string; // "//cdn.weatherapi.com/weather/64x64/night/368.png"
    code: number; // 1255
  };
  wind_mph: number; // 15.9
  wind_kph: number; // 25.6
  wind_degree: number; // 271
  wind_dir: string; // "W"
  pressure_mb: number; // 1021.0
  pressure_in: number; // 30.15
  precip_mm: number; // 0.0
  precip_in: number; // 0.0
  humidity: number; // 74
  cloud: number; // 89
  feelslike_c: number; // -10.0
  feelslike_f: number; // 14.0
  windchill_c: number; // -10.0
  windchill_f: number; // 14.0
  heatindex_c: number; // -3.1
  heatindex_f: number; // 26.4
  dewpoint_c: number; // -7.0
  dewpoint_f: number; // 19.4
  will_it_rain: number; // 0
  chance_of_rain: number; // 0
  will_it_snow: number; // 0
  chance_of_snow: number; // 0
  vis_km: number; // 10.0
  vis_miles: number; // 6.0
  gust_mph: number; // 18.8
  gust_kph: number; // 30.2
};
