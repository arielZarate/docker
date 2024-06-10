import express from "express";
const router = express.Router();
import { controller } from "../controller/user.js";

router.get("/", controller.get);

export default router;
