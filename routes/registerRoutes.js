import express  from "express";
import { createCamper, getAllCampers } from "../models/campRegister.js";

const router = express.Router()


router.post("/", createCamper)

router.get("/", getAllCampers)


export default router 

