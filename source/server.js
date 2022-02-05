import Hapi from '@hapi/hapi';
import routes from './routes';
import { db } from './database';

let server;

const start = async () => {
    server = Hapi.server({
        port: process.env.PORT || 3000,
        host: process.env.MYSQL_HOST,
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (req, res) => {
            return res.response('Welcome to Movies!').code(200);
        }
    })

    // to loop through all routes
    routes.forEach( route => server.route(route))

    db.connect();
    await server.start();
    console.log(`Server is listening on ${server.info.uri}`);
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

process.on('SIGINT', async () => {
    console.log('Stopping server...');
    await server.stop({ timeout: 10000 });
    db.end();
    console.log('Server stopped.');
    process.exit(0)

})

start();