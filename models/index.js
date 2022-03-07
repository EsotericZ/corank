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

Player.hasMany(Match, {
    foreignKey: 'playerId',
    onDelete: 'CASCADE',
});
Match.belongsTo(Player, {
    foreignKey: 'playerId',
});

module.exports = {
    Match,
    Player,
    Tournament,
<<<<<<< HEAD
    User
=======
    User,
>>>>>>> main
};