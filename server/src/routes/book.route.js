import { Router } from "express";
import { createBooks, deleteBooks, getAllBooks, updateBooks } from "../controllers/book.controller.js";

const router = Router();

router.route("/books")
    .post(createBooks)
    .get(getAllBooks)

router.route("/books/:id")
    .put(updateBooks)
    .delete(deleteBooks)

export default router;