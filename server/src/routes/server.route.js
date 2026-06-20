import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    return res.status(200).json({
        name: process.env.PROJECT_NAME,
        development: {
            frontEnd: "Angular",
            backEnd: "Nodejs + Express"
        },
        status: "online"
    });
});

export default router;