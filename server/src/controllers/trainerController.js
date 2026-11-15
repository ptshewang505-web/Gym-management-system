
const Trainer = require("../models/Trainer");

// CREATE TRAINER
const createTrainer = async (req, res, next) => {
    try {
        console.log("Received trainer data:", req.body);

        const trainer = await Trainer.create(req.body);

        console.log("Trainer saved:", trainer);

        res.status(201).json({
            success: true,
            message: "Trainer added successfully!",
            data: trainer
        });
    } catch (error) {
        next(error);
    }
};

// GET ALL TRAINERS
const getTrainers = async (req, res, next) => {
    try {
        const trainers = await Trainer.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: trainers.length,
            data: trainers
        });
    } catch (error) {
        next(error);
    }
};

// GET TRAINER BY ID
const getTrainerById = async (req, res, next) => {
    try {
        const trainer = await Trainer.findById(req.params.id);

        if (!trainer) {
            return res.status(404).json({
                success: false,
                message: "Trainer not found"
            });
        }

        res.status(200).json({
            success: true,
            data: trainer
        });
    } catch (error) {
        next(error);
    }
};

// UPDATE TRAINER
const updateTrainer = async (req, res, next) => {
    try {
        const trainer = await Trainer.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!trainer) {
            return res.status(404).json({
                success: false,
                message: "Trainer not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Trainer updated successfully!",
            data: trainer
        });
    } catch (error) {
        next(error);
    }
};

// DELETE TRAINER
const deleteTrainer = async (req, res, next) => {
    try {
        const trainer = await Trainer.findByIdAndDelete(req.params.id);

        if (!trainer) {
            return res.status(404).json({
                success: false,
                message: "Trainer not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Trainer deleted successfully!"
        });
    } catch (error) {
        next(error);
    }
};

// EXPORT ALL FUNCTIONS
module.exports = {
    createTrainer,
    getTrainers,
    getTrainerById,
    updateTrainer,
    deleteTrainer
};
