import { v4 as uuid } from 'uuid';
import { db } from '../database';

export const createNewMovieRoute = {
    method: 'POST',
    path: '/api/movies',
    handler: async (req, res) => {
        const userId = '12345';
        const id = uuid();
        const {tittle = '', trailer = '', synopsis = '', realease_date = '', director = '', featured_song = '', budget = ''} = req.payload;

        await db.query(`
            INSERT INTO movies (id, user_id, tittle, trailer, synopsis, realease_date, director, featured_song, budget)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
        `,
        [id, userId, tittle, trailer, synopsis, realease_date, director, featured_song, budget]
        );
        return { id, user_id: userId, tittle, trailer, synopsis, realease_date, director, featured_song, budget };
    }
}