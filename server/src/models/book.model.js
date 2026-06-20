import { DataTypes } from "sequelize";
export const books = (sequelize) => {
    const book = sequelize.define("Books", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        author: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
    },
    {
        timestamps: false
    }
);   

    return book
}