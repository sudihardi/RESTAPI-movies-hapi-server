import { createNewMovieRoute } from "./createNewMovie";
import { deleteMovieRoute } from "./deleteMovie";
import { getAllMoviesRoute } from "./getAllMovies";
import { getMovieRoute } from "./getMovieByTittle";
import { updateMovieRoute } from "./updateMovie";

export default [
    getAllMoviesRoute,
    getMovieRoute,
    createNewMovieRoute,
    updateMovieRoute,
    deleteMovieRoute,
];