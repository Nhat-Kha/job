import express from "express";
import authRoute from "./authRoutes";

const router = express.Router();

const path = "/api/v1/";

router.use(`${path}auth`, authRoute);

export default router;
