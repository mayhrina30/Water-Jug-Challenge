import request from 'supertest';
import app from '../src/server';  // Asegúrate de que la ruta sea correcta

describe('POST /solve', () => {
    it('should return cached results on subsequent requests', async () => {
        const body = { x: 5, y: 3, z: 4 };

        // Realiza la primera solicitud
        let response = await request(app).post('/solve').send(body);
        expect(response.status).toBe(200);

        // Verifica el contenido de la respuesta
        const firstResult = response.body;

        // Realiza la segunda solicitud (debería usar el caché)
        response = await request(app).post('/solve').send(body);
        expect(response.status).toBe(200);

        // Verifica que la respuesta sea la misma que la primera
        expect(response.body).toEqual(firstResult);
    });

    it('should handle different requests separately', async () => {
        const body1 = { x: 5, y: 3, z: 4 };
        const body2 = { x: 7, y: 5, z: 6 };

        // Realiza la primera solicitud con el primer conjunto de datos
        let response = await request(app).post('/solve').send(body1);
        expect(response.status).toBe(200);

        // Verifica el contenido de la respuesta
        const result1 = response.body;

        // Realiza la solicitud con el segundo conjunto de datos
        response = await request(app).post('/solve').send(body2);
        expect(response.status).toBe(200);

        // Verifica que la respuesta sea diferente
        const result2 = response.body;
        expect(result1).not.toEqual(result2);
    });
});
