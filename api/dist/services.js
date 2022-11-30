"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeamPlayers = exports.getGameByTeam = exports.getFootball = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const getFootball = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, cross_fetch_1.default)(`https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2022REG`, {
        headers: {
            "Ocp-Apim-Subscription-Key": process.env.SPORTSDATA_API_KEY,
        },
    });
    return res.json();
});
exports.getFootball = getFootball;
const getGameByTeam = (week) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, cross_fetch_1.default)(`https://api.sportsdata.io/v3/nfl/scores/json/TeamGameStats/2022/${week}`, {
        headers: {
            "Ocp-Apim-Subscription-Key": process.env.SPORTSDATA_API_KEY,
        },
    });
    return res.json();
});
exports.getGameByTeam = getGameByTeam;
const getTeamPlayers = (team) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, cross_fetch_1.default)(`https://api.sportsdata.io/v3/nfl/scores/json/Players/${team}`, {
        headers: {
            "Ocp-Apim-Subscription-Key": process.env.SPORTSDATA_API_KEY,
        },
    });
    return res.json();
});
exports.getTeamPlayers = getTeamPlayers;
