const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const PORT = process.env.PORT || 3030

const init = async () => {
    const server = Hapi.server({
        port: PORT,
        host: 'localhost',
    });

    server.route(routes);

    await server.start();
    console.log(`Server is running on ${server.info.uri}`);
};

init();
