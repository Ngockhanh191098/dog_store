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

const getDogsPagination = async (req, res) => {
    let { offset, limit } = req.query;
    offset = typeof offset === "string" ? parseInt(offset) : offset;
    limit = typeof limit === "string" ? parseInt(limit) : limit;

    let { count, rows } = await DogModel.findAndCountAll({
        offset,
        limit
    });

    // transform rows
    rows = rows.map((row) => {
        return row.dataValues;
    });
    
    return res.status(200).json({
        count,
        limit,
        offset,
        rows
    })
};

const deleteDog = async (req, res) => {
    const dogId = req.params;
    const foundDog = await DogModel.findOne({
        where: {
            id: dogId.id
        }
    });

    if (!foundDog) {
        return res.status(404).json({message: "Dog is not exist!"})
    }

    try {
        await DogModel.destroy({
            where: {
                id: dogId.id
            }
        });

        return res.status(200).json({message: "Delete dog successfully!"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

// update the dog
const updateDog = async (req, res) => {
    const dogId = req.params.id;
    const updateData = req.body;

    try {
        const file = req.file;
        const filename = file.filename;

        const updateDog = await DogModel.update({
            title: updateData.title,
            price: updateData.price,
            breed: updateData.breed,
            image: filename,
            description: updateData.description
        });
        console.log(updateDog);
        return res.status(201).json(updateDog);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

module.exports = {
    addNewDog,
    getDogsPagination,
    deleteDog,
    updateDog
};