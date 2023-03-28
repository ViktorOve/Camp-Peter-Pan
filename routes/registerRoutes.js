import express  from "express";
import { createCamper, getAllCampers, updateCamper, deleteCamper } from "../models/campRegister.js";

const router = express.Router()


router.post("/", createCamper)

router.get("/", getAllCampers)

router.patch("/:id", updateCamper)

router.delete("/:id", deleteCamper)


export default router 

