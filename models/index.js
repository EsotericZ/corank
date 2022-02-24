const Match = require('./Match');
const Player = require('./Player');
const Tournament = require('./Tournament');
const User = require('./User');

Tournament.hasMany(Match, {
    foreignKey: 'tournamentId',
    onDelete: 'CASCADE',
});
Match.belongsTo(Tournament, {
    foreignKey: 'tournamentId',
});

Match.hasMany(Player, {
    foreignKey: 'playerId',
    onDelete: 'CASCADE',
});
Player.belongsTo(Match, {
    foreignKey: 'playerId',
});

module.exports = {
    Match,
    Player,
    Tournament
};