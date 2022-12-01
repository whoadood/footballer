"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const services_1 = require("./utils/services");
const data_manip_1 = require("./utils/data-manip");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, express_1.json)());
const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || "development";
app.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const teams = yield (0, services_1.getTeamsDetails)();
    const schedule = yield (0, services_1.getSchedule)();
    const standings = yield (0, services_1.getLeagueStandings)();
    const teamsStandings = standings.map((team) => {
        const teamDetails = teams.filter((t) => t.GlobalTeamID === team.GlobalTeamID);
        return Object.assign(Object.assign({}, team), teamDetails[0]);
    });
    const formatSchedule = schedule.reduce((acc, cur) => {
        if (acc[`week${cur.Week}`]) {
            acc[`week${cur.Week}`].push(cur);
        }
        else {
            acc[`week${cur.Week}`] = [cur];
        }
        return acc;
    }, {});
    res.json({ standings: teamsStandings, schedule: formatSchedule });
}));
app.get("/depth", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, services_1.getDepthChart)();
    const qb = (0, data_manip_1.filterByPosition)(data, "QB");
    const wr = (0, data_manip_1.filterByPosition)(data, "WR");
    const rb = (0, data_manip_1.filterByPosition)(data, "RB");
    res.json({ qb, wr, rb });
}));
app.post("/game", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { week, gameId } = req.body;
    const data = yield (0, services_1.getGameByTeam)(week);
    const teams = yield (0, services_1.getTeamsDetails)();
    const gameDetails = data.filter((g) => g.GlobalGameID == gameId);
    const formatDetails = gameDetails.map((team) => {
        const teamDetails = teams.filter((t) => t.GlobalTeamID === team.GlobalTeamID);
        return Object.assign(Object.assign({}, team), teamDetails[0]);
    });
    res.json(formatDetails);
}));
app.post("/team", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { team } = req.body;
    console.log("server team", team);
    const data = yield (0, services_1.getTeamPlayers)(team);
    res.json(data);
}));
app.listen(PORT, () => console.log(` 📡 Backend server: ` + ` Running in ${ENV} mode on port ${PORT}`));
