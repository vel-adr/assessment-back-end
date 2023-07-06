const users = require('./users')

const routes = [
    {
        method: 'GET',
        path: '/users',
        handler: () => { 
            return users
        },
    },
];

module.exports = routes;