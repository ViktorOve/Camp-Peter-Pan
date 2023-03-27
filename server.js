import express from "express";
import router from "./routes/registerRoutes.js";
import db from "./mongoose.js";

const app = express();

const PORT = 5000;


app.use(express.json())

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});

app.use("/camp", router)
