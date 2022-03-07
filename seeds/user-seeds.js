const { User } = require('../models');

const userData = [
    {
        firstName: 'Kirtley',
        lastName: 'Michelle',
        username: 'kittie',
        email: 'hello@kirtleymichelle.com',
        password: 'password',
        playerId: 'KA001',
        role: 'admin',
    },
    {
        firstName: 'CJ',
        lastName: 'Sanders',
        username: 'squee',
        email: 'cjsand03@gmail.com',
        password: 'password',
        playerId: 'CJ001',
        role: 'admin',
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;