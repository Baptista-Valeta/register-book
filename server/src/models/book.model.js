export const books = (sequelize, DataTypes) => {
    const book = sequelize.define("books", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            require: true,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        author: {
            type: DataTypes.STRING,
            require: true,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        category: {
            type: DataTypes.STRING,
            require: false,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        yearPublic: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
    });   

    return book
}