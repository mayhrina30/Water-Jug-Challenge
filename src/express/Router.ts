import ExpressAdapter from "./ExpressAdapter";
import SolveChallengeController from "../controller/SolveChallengeController";

const app = ExpressAdapter.create();
app.post("/challenge", ExpressAdapter.route(SolveChallengeController.solveChallenge));
export default app;