// import hapi/boom to easy handling errors
import Boom from '@hapi/boom';
import { db } from '../database';

export const getMovieRoute = {
    method: 'GET',
    path: '/api/movies/{tittle}',
    handler: async (req, res) => {
        const tittle = req.params.tittle;
        const { results } = await db.query(
           `SELECT * FROM movies WHERE tittle LIKE "%${tittle}%"`
        );

        const movie = results[0];
        if(!movie) throw Boom.notFound('Movie does not exist!') 
        return movie;
    }
}