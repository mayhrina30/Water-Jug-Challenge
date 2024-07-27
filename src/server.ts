import express from 'express';
import router from './express/Router'; 
import cache from 'memory-cache'; 

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', router);

app.use('/solve', (req, res) => {
    const { x, y, z } = req.body;

    // Verifica caché
    const cacheKey = `${x}-${y}-${z}`;
    const cachedResult = cache.get(cacheKey);
    if (cachedResult) {
        return res.json(cachedResult);
    }

    
    const result = solveRiddle(x, y, z);

    // Guarda en caché
    cache.put(cacheKey, result, 10000); // Cachea por 10 segundos (ajustable)
    
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


export default app;


function solveRiddle(x: number, y: number, z: number) {
    
    return [];
}
