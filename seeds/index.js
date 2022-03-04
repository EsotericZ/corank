const seedPlayers = require('./player-seeds');
const seedTournaments = require('./tournament-seeds');
const seedMatches = require('./match-seeds');

const sequelize = require('../config');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedPlayers();
    console.log('\n----- PLAYERS SYNCED -----\n');

    await seedTournaments();
    console.log('\n----- TOURNAMENTS SYNCED -----\n');

    await seedMatches();
    console.log('\n----- MATCHES SYNCED -----\n');

    process.exit(0);
};

seedAll();