import { Router } from "express";
import { createBooks, deleteBooks, getAllBooks, updateBooks } from "../controllers/book.controller.js";

const router = Router();

router.route("/api/books")
    .post(createBooks)
    .get(getAllBooks)

router.route("/api/books/:id")
    .put(updateBooks)
    .delete(deleteBooks)

export default router;