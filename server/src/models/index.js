import { books } from "./book.model.js";

export const initModels = (sequelize) => {
    return {
        books: books(sequelize)
    };
};