
import express from "express";
import SolveChallengeController from "./controller/SolveChallengeController";

const app = express();

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Ruta para manejar la solicitud POST a /challenge
app.post("/challenge", (req, res) => {
  try {
    const result = SolveChallengeController.solveChallenge({
      body: req.body,
      query: req.query,
      headers: req.headers,
      path: req.path,
    });
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Iniciar el servidor en el puerto 4000
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
