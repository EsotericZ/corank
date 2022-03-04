const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Tournament extends Model {};

Tournament.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        tournamentId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
        },
        startDate: {
            type: DataTypes.DATEONLY,
            validate: {
                isDate: true,
            }
        },
        endDate: {
            type: DataTypes.DATEONLY,
            validate: {
                isDate: true,
            }
        },
        weightIndex: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'tournament',
    }
);

module.exports = Tournament;