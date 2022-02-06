import { db } from '../database';

export const deleteMovieRoute = {
    method: 'DELETE',
    path: '/api/movies/{id}',
    handler: async (req, res) => {
        const { id } = req.params;

        await db.query(
            'DELETE FROM movies WHERE id=?',
            [id],
        );
        return { message: 'Movie Successfully Deleted!'};
    }
}