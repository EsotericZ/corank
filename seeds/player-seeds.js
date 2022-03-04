const { Player } = require('../models');

const playerData = [
    {
        firstName: 'CJ',
        lastName: 'Sanders',
        playerId: 'cjsand020486',
        birthday: '1986-02-04',
        gender: 'Male',
    },
    {
        firstName: 'Nick',
        lastName: 'Blanchard',
        playerId: 'nickblan020486',
        birthday: '1986-02-04',
        gender: 'Male',
    },
    {
        firstName: 'Derek',
        lastName: 'Schaeffer',
        playerId: 'derekscha020486',
        birthday: '1986-02-04',
        gender: 'Male',
    },
];

const seedPlayers = () => Player.bulkCreate(playerData);

module.exports = seedPlayers;