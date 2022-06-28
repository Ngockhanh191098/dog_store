const db = require('../models/index');
const DogModel = db.Dog;

const addNewDog = async (req, res) => {
    const newData = req.body;
    try {
        const file = req.file;
        const filename = file.filename;

        const createDog = await DogModel.create({
            title: newData.title,
            price: newData.price,
            breed: newData.breed,
            image: filename,
            description: newData.description
        });
        console.log(createDog);
        return res.status(201).json(createDog);
    } catch (error) {
        return res.status(500).json({message: "Server is error"})
    }
};

const getDogs = async (req, res) => {
    const dogs = await DogModel.findAll();
    res.status(200).json(dogs);
}

module.exports = {
    addNewDog,
    getDogs
};