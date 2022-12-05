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
export type Schedule = {
  week1: Game[];
  week2: Game[];
  week3: Game[];
  week4: Game[];
  week5: Game[];
  week6: Game[];
  week7: Game[];
  week8: Game[];
  week9: Game[];
  week10: Game[];
  week11: Game[];
  week12: Game[];
  week13: Game[];
  week14: Game[];
  week15: Game[];
  week16: Game[];
  week17: Game[];
  week18: Game[];
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

export type Weather = {
  location: {
    name: string; // "Chicago"
    region: string; // "Illinois"
    country: string; // "United States of America"
    lat: number; // 41.85
    lon: number; // -87.65;
    tz_id: string; // "America/Chicago"
    localtime_epoch: number; // 1669970437
    localtime: string; // "2022-12-02 2:40"
  };
  forecast: {
    forecastday: {
      date: string; // "2022-11-18"
      date_epoch: number; // 1668729600
      day: {
        maxtemp_c: number; // -2.8
        maxtemp_f: number; //  27.0
        mintemp_c: number; // -6.1
        mintemp_f: number; //  21.0
        avgtemp_c: number; // -4.3
        avgtemp_f: number; //  24.3
        maxwind_mph: number; // 17.0
        maxwind_kph: number; // 27.4
        totalprecip_mm: number; // 0.0
        totalprecip_in: number; // 0.0
        avgvis_km: number; // 9.0
        avgvis_miles: number; // 5.0
        avghumidity: number; // 70.0
        condition: {
          text: string; // "Light snow showers"
          icon: string; // "//cdn.weatherapi.com/weather/64x64/day/368.png"
          code: number; // 1255
        };
        uv: number; // 0.0
      };
      astro: {
        sunrise: string; // "06:44 AM"
        sunset: string; // "04:27 PM";
        moonrise: string; // "12:38 AM";
        moonset: string; // "02:01 PM";
        moon_phase: string; // "Third Quarter";
        moon_illumination: string; // "37";
      };
      hour: {
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
      }[];
    }[];
  };
};
export type PlayerDetails = {
  PlayerID: 21222;
  Team: string; // "WAS"
  Number: unknown | null;
  FirstName: string; // "Keaton"
  LastName: string; // "Sutherland"
  Position: string; // "OL"
  Status: string; // "Practice Squad"
  Height: string; // "6'5\""
  Weight: number; // 315
  BirthDate: string; // "1997-02-12T00:00:00"
  College: string; // "Texas A&M"
  Experience: number;
  FantasyPosition: string; // "OL"
  Active: boolean;
  PositionCategory: string; // "OFF"
  Name: string; // "Keaton Sutherland"
  Age: number;
  ExperienceString: string; // "4th Season"
  BirthDateString: string; // "February 12, 1997"
  PhotoUrl: string; // "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21222.png"
  ByeWeek: number;
  UpcomingGameOpponent: string; // "NYG"
  UpcomingGameWeek: number;
  ShortName: string; // "K.Sutherland"
  AverageDraftPosition: unknown | null;
  DepthPositionCategory: string; // "Scrambled"
  DepthPosition: string; // "Scrambled"
  DepthOrder: unknown | null;
  DepthDisplayOrder: unknown | null;
  CurrentTeam: string; // "WAS"
  CollegeDraftTeam: string; // "CIN"
  CollegeDraftYear: number;
  CollegeDraftRound: unknown | null;
  CollegeDraftPick: unknown | null;
  IsUndraftedFreeAgent: true;
  HeightFeet: number;
  HeightInches: number;
  UpcomingOpponentRank: number;
  UpcomingOpponentPositionRank: unknown | null;
  CurrentStatus: string; // "Scrambled"
  UpcomingSalary: unknown | null;
  FantasyAlarmPlayerID: number; // 307028
  SportRadarPlayerID: string; // "be44e57a-7623-4b1c-a6fd-7a30795bb8ac"
  RotoworldPlayerID: unknown | null;
  RotoWirePlayerID: number; // 13720
  StatsPlayerID: unknown | null;
  SportsDirectPlayerID: number; // 90493
  XmlTeamPlayerID: unknown | null;
  FanDuelPlayerID: unknown | null;
  DraftKingsPlayerID: null;
  YahooPlayerID: number; // 32470
  InjuryStatus: string; // "Scrambled"
  InjuryBodyPart: string; // "Scrambled"
  InjuryStartDate: unknown | null;
  InjuryNotes: string; // "Scrambled"
  FanDuelName: unknown | null;
  DraftKingsName: unknown | null;
  YahooName: unknown | null;
  FantasyPositionDepthOrder: unknown | null;
  InjuryPractice: string; // "Scrambled"
  InjuryPracticeDescription: string; // "Scrambled"
  DeclaredInactive: boolean;
  UpcomingFanDuelSalary: unknown | null;
  UpcomingDraftKingsSalary: unknown | null;
  UpcomingYahooSalary: unknown | null;
  TeamID: number; // 35
  GlobalTeamID: number; // 35
  FantasyDraftPlayerID: unknown | null;
  FantasyDraftName: unknown | null;
  UsaTodayPlayerID: number; // 8254379
  UsaTodayHeadshotUrl: string; // "http://cdn.usatsimg.com/api/download/?imageID=16578633"
  UsaTodayHeadshotNoBackgroundUrl: string; // "http://cdn.usatsimg.com/api/download/?imageID=16578634"
  UsaTodayHeadshotUpdated: string; // "2021-08-17T22:37:35"
  UsaTodayHeadshotNoBackgroundUpdated: string; // "2021-08-17T22:37:43"
  PlayerSeason: unknown | null;
  LatestNews: any[];
};
export type PlayerStats = {
  GameKey: string; //	"202210135"
  PlayerID: number; // 22686
  SeasonType: number; //	1
  Season: number; // 2022
  GameDate: string; //	"2022-09-11T13:00:00"
  Week: number; //	1
  Team: string; //	"WAS"
  Opponent: string; // "JAX"
  HomeOrAway: string; // "HOME"
  Number: number; // 2
  Name: string; // "Dyami Brown"
  Position: string; //"WR"
  PositionCategory: string; // 	"OFF"
  Activated: number; //	1
  Played: number; //	1
  Started: number; //	0
  PassingAttempts: number; //	0
  PassingCompletions: number; //	0
  PassingYards: number; //	0
  PassingCompletionPercentage: number; //	0
  PassingYardsPerAttempt: number; //	0
  PassingYardsPerCompletion: number; //	0
  PassingTouchdowns: number; //	0
  PassingInterceptions: number; //	0
  PassingRating: number; //	0
  PassingLong: number; //	0
  PassingSacks: number; //	0
  PassingSackYards: number; //	0
  RushingAttempts: number; //	0
  RushingYards: number; //	0
  RushingYardsPerAttempt: number; //	0
  RushingTouchdowns: number; //	0
  RushingLong: number; //	0
  ReceivingTargets: number; //	0
  Receptions: number; //	0
  ReceivingYards: number; //	0
  ReceivingYardsPerReception: number; //	0
  ReceivingTouchdowns: number; //	0
  ReceivingLong: number; //	0
  Fumbles: number; //	0
  FumblesLost: number; //	0
  PuntReturns: number; //	0
  PuntReturnYards: number; //	0
  PuntReturnYardsPerAttempt: number; //	0
  PuntReturnTouchdowns: number; //	0
  PuntReturnLong: number; //	0
  KickReturns: number; //	0
  KickReturnYards: number; //	0
  KickReturnYardsPerAttempt: number; //	0
  KickReturnTouchdowns: number; //	0
  KickReturnLong: number; //	0
  SoloTackles: number; //	0
  AssistedTackles: number; //	0
  TacklesForLoss: number; //	0
  Sacks: number; //	0
  SackYards: number; //	0
  QuarterbackHits: number; //	0
  PassesDefended: number; //	0
  FumblesForced: number; //	0
  FumblesRecovered: number; //	0
  FumbleReturnYards: number; //	0
  FumbleReturnTouchdowns: number; //	0
  Interceptions: number; //	0
  InterceptionReturnYards: number; //	0
  InterceptionReturnTouchdowns: number; //	0
  BlockedKicks: number; //	0
  SpecialTeamsSoloTackles: number; //	0
  SpecialTeamsAssistedTackles: number; //	0
  MiscSoloTackles: number; //	0
  MiscAssistedTackles: number; //	0
  Punts: number; //	0
  PuntYards: number; //	0
  PuntAverage: number; //	0
  FieldGoalsAttempted: number; //	0
  FieldGoalsMade: number; //	0
  FieldGoalsLongestMade: number; //	0
  ExtraPointsMade: number; //	0
  TwoPointConversionPasses: number; //	0
  TwoPointConversionRuns: number; //	0
  TwoPointConversionReceptions: number; //	0
  FantasyPoints: number; //	0
  FantasyPointsPPR: number; //	0
  ReceptionPercentage: number; //	0
  ReceivingYardsPerTarget: number; //	0
  Tackles: number; //	0
  OffensiveTouchdowns: number; //	0
  DefensiveTouchdowns: number; //	0
  SpecialTeamsTouchdowns: number; //	0
  Touchdowns: number; //	0
  FantasyPosition: string; //	"WR"
  FieldGoalPercentage: number; //	0
  PlayerGameID: number; //	990828570
  FumblesOwnRecoveries: number; //	0
  FumblesOutOfBounds: number; //	0
  KickReturnFairCatches: number; //	0
  PuntReturnFairCatches: number; //	0
  PuntTouchbacks: number; //	0
  PuntInside20: number; //	0
  PuntNetAverage: number; //	0
  ExtraPointsAttempted: number; //	0
  BlockedKickReturnTouchdowns: number; //	0
  FieldGoalReturnTouchdowns: number; //	0
  Safeties: number; //	0
  FieldGoalsHadBlocked: number; //	0
  PuntsHadBlocked: number; //	0
  ExtraPointsHadBlocked: number; //	0
  PuntLong: number; //	0
  BlockedKickReturnYards: number; //	0
  FieldGoalReturnYards: number; //	0
  PuntNetYards: number; //	0
  SpecialTeamsFumblesForced: number; //	0
  SpecialTeamsFumblesRecovered: number; //	0
  MiscFumblesForced: number; //	0
  MiscFumblesRecovered: number; //	0
  ShortName: string; //	"Dyami Brown"
  PlayingSurface: string; //	"Grass"
  IsGameOver: boolean; //	true
  SafetiesAllowed: number; // 0
  Stadium: string; //	"FedEx Field"
  Temperature: number; //	57
  Humidity: number; //	77
  WindSpeed: number; //	2
  FanDuelSalary: number; //	3533
  DraftKingsSalary: number; //	2304
  FantasyDataSalary: number; //	2304
  OffensiveSnapsPlayed: number; //	2
  DefensiveSnapsPlayed: number; //	0
  SpecialTeamsSnapsPlayed: number; //	3
  OffensiveTeamSnaps: number; //	59
  DefensiveTeamSnaps: number; //	54
  SpecialTeamsTeamSnaps: number; //	17
  VictivSalary: boolean; //	null
  TwoPointConversionReturns: number; //	0
  FantasyPointsFanDuel: number; //	0
  FieldGoalsMade0to19: number; //	0
  FieldGoalsMade20to29: number; //	0
  FieldGoalsMade30to39: number; //	0
  FieldGoalsMade40to49: number; //	0
  FieldGoalsMade50Plus: number; //	0
  FantasyPointsDraftKings: number; //	0
  YahooSalary: number; //	6
  FantasyPointsYahoo: number; //	0
  InjuryStatus: string; //	"Scrambled"
  InjuryBodyPart: string; //	"Scrambled"
  InjuryStartDate: unknown | null;
  InjuryNotes: string; //	"Scrambled"
  FanDuelPosition: string; // "Scrambled"
  DraftKingsPosition: string; //	"Scrambled"
  YahooPosition: string; //	"Scrambled"
  OpponentRank: number; // 18
  OpponentPositionRank: number; //	18
  InjuryPractice: string; //	"Scrambled"
  InjuryPracticeDescription: string; // "Scrambled"
  DeclaredInactive: boolean; //	false
  FantasyDraftSalary: unknown | null;
  FantasyDraftPosition: unknown | null;
  TeamID: number; //	35
  OpponentID: number; //	15
  Day: string; //	"2022-09-11T00:00:00"
  DateTime: string; //	"2022-09-11T13:00:00"
  GlobalGameID: number; //	18013
  GlobalTeamID: number; //	35
  GlobalOpponentID: number; //	15
  ScoreID: number; //	18013
  FantasyPointsFantasyDraft: number; //	0
  OffensiveFumbleRecoveryTouchdowns: unknown | null;
  SnapCountsConfirmed: boolean; // true
  ScoringDetails: any[];
};
