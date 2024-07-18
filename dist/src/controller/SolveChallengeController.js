"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SolveChallenge_1 = __importDefault(require("../utils/SolveChallenge"));
class SolveChallengeController {
    static solveChallenge(input) {
        const { body } = input;
        if (!body.x || !body.y || !body.z)
            throw new Error("Missing required parameters");
        const challenge = new SolveChallenge_1.default(body.x, body.y, body.z);
        return challenge.execute();
    }
}
exports.default = SolveChallengeController;
//# sourceMappingURL=SolveChallengeController.js.map