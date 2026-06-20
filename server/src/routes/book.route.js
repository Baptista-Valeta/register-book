import { Router } from "express";
import { createBooks, getAllBooks } from "../controllers/book.controller.js";

const router = Router();

router.route("/books")
    .post(createBooks)
    .get(getAllBooks)

export default router;