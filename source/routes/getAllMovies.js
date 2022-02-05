import { db } from '../database';

export const getAllMoviesRoute = {
    method: 'GET',
    path: '/api/movies',
    handler: async (req, res) => {
        const { results } = await db.query(
            'SELECT * FROM movies'
        );
        return results;
    }
}