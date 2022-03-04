const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Match extends Model {};

Match.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        winPlayerId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'player',
                key: 'playerId',
            }
        },
        winDiff : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        losePlayerId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'player',
                key: 'playerId',
            }
        },
        loseDiff : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tournamentId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'tournament',
                key: 'tournamentId',
            }
        },
        matchType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'match',
    }
);

module.exports = Match;