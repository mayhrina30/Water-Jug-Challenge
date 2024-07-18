"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SolveChallengeController_1 = __importDefault(require("./controller/SolveChallengeController"));
const app = (0, express_1.default)();
// Middleware para parsear JSON en las solicitudes
app.use(express_1.default.json());
// Ruta para manejar la solicitud POST a /challenge
app.post("/challenge", (req, res) => {
    try {
        const result = SolveChallengeController_1.default.solveChallenge({
            body: req.body,
            query: req.query,
            headers: req.headers,
            path: req.path,
        });
        res.json(result);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// Iniciar el servidor en el puerto 4000
app.listen(4000, () => {
    console.log("Server started on port 4000");
});
//# sourceMappingURL=server.js.map