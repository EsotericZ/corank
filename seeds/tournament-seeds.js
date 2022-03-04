const { Tournament } = require('../models');

const tournamentData = [
    {
        tournamentId: 'blizbash2022',
        name: 'Blizzard Bash 2022',
        weightIndex: 20,
    },
];

const seedTournaments = () => Tournament.bulkCreate(tournamentData);

module.exports = seedTournaments;