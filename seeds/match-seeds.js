const { Match } = require('../models');
const { User } = require('../models');

const matchData = [
    {
        winPlayerId: 'cjsand020486',
        winDiff: 15,
        losePlayerId: 'derekscha020486',
        loseDiff: 15,
        tournamentId: 'blizbash2022',
        matchType: 'Singles',
    },
    {
        winPlayerId: 'nickblan020486',
        winDiff: 16,
        losePlayerId: 'derekscha020486',
        loseDiff: 16,
        tournamentId: 'blizbash2022',
        matchType: 'Singles',
    },
    {
        winPlayerId: 'cjsand020486',
        winDiff: 5,
        losePlayerId: 'nickblan020486',
        loseDiff: 5,
        tournamentId: 'blizbash2022',
        matchType: 'Singles',
    },
];

const seedMatches = () => Match.bulkCreate(matchData);

module.exports = seedMatches;