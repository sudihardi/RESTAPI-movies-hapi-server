import { db } from '../database';

export const updateMovieRoute = {
    method: 'POST',
    path: '/api/movies/{id}',
    handler: async (req, res) => {
        const { id } = req.params;
        const {tittle = '', trailer = '', synopsis = '', realease_date = '', director = '', featured_song = '', budget = ''} = req.payload;
        const userId = '12345';

        await db.query(`
            UPDATE movies
                SET tittle=?, trailer=?, synopsis=?, realease_date=?, director=?, featured_song=?, budget=?
                WHERE id=? AND user_id=?
        `,
        [tittle, trailer, synopsis, realease_date, director, featured_song, budget, id, userId]);
        
        const { results } = await db.query(
            'SELECT * FROM movies WHERE id=? AND user_id=?',
            [id, userId],
        );
        return results[0];
    }

}