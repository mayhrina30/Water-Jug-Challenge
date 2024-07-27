import express from 'express';
import router from './express/Router'; 
import cache from 'memory-cache'; // Asegúrate de tener este módulo instalado

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', router);
// Configura tu enrutador aquí
app.use('/solve', (req, res) => {
    const { x, y, z } = req.body;

    // Verifica caché
    const cacheKey = `${x}-${y}-${z}`;
    const cachedResult = cache.get(cacheKey);
    if (cachedResult) {
        return res.json(cachedResult);
    }

    // Aquí va la lógica para resolver el problema de las jarras
    const result = solveRiddle(x, y, z); // Supón que esta es la función que resuelve el reto

    // Guarda en caché
    cache.put(cacheKey, result, 10000); // Cachea por 10 segundos (ajustable)
    
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Exporta la aplicación para las pruebas
export default app;

// Ejemplo de la función para resolver el reto
function solveRiddle(x: number, y: number, z: number) {
    // Implementa la lógica para resolver el reto
    return [];
}
