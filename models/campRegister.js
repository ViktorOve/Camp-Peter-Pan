import mongoose from "../mongoose.js";

const campSchema = mongoose.Schema({
    name: {type: String, required: true },
    age: {type: Number, required: true },
    height: String,
    country: String,
    allergies: {type: [String], default: []}
});

const Camper = mongoose.model("camper", campSchema)

const createCamper = async (req, res) => {
    const newCamper = req.body;
    const createdCamper = await Camper.create(newCamper)
    res.send(`Success, registered ${newCamper.name}`); 
};

const getAllCampers = async (req, res) => {
    const allCampers = await Camper.find()
    res.send(allCampers)
}

export { createCamper, getAllCampers }

