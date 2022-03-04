const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Player extends Model {};

Player.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        playerId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        birthday: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        singleRanking: {
            type: DataTypes.INTEGER,
        },
        doubleRanking: {
            type: DataTypes.INTEGER,
        },
        mixedRanking: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'player',
    }
);

module.exports = Player;