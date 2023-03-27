import express  from "express";
import { createCamper } from "../models/campRegister.js";

const router = express.Router()


router.post("/", createCamper)

router.get("/", (req, res) => {
    res.send("this is my get function")
})


export default router 

