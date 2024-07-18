"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressAdapter_1 = __importDefault(require("./ExpressAdapter"));
const SolveChallengeController_1 = __importDefault(require("../controller/SolveChallengeController"));
const app = ExpressAdapter_1.default.create();
app.post("/challenge", ExpressAdapter_1.default.route(SolveChallengeController_1.default.solveChallenge));
exports.default = app;
//# sourceMappingURL=Router.js.map