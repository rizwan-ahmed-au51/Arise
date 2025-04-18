const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Toppers = require("../model/topperModel");
const topperRouting = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Create uploads directory if it doesn't exist
        const uploadDir = './public/uploads';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Helper function to handle errors
const handleError = (res, error, defaultMessage = 'An error occurred') => {
    console.error(error);
    res.status(500).json({
        success: false,
        message: error.message || defaultMessage,
        error: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
};

// Add new topper
topperRouting.post("/addtopper", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image file is required"
            });
        }

        const { marks, stdname, year } = req.body;
        if (!marks || !stdname || !year) {
            return res.status(400).json({
                success: false,
                message: "All fields (marks, stdname, year) are required"
            });
        }

        const path = `/uploads/${req.file.filename}`;
        const topper = new Toppers({
            path,
            filename: req.file.filename,
            marks,
            stdname,
            year
        });

        const result = await topper.save();
        res.status(201).json({
            success: true,
            message: "Topper added successfully",
            data: result
        });
    } catch (error) {
        handleError(res, error, "Failed to add topper");
    }
});

// Get all toppers
topperRouting.get("/topper", async (req, res) => {
    try {
        const toppers = await Toppers.find()
            .sort({ marks: -1 })
            .select('stdname marks filename path _id year');

        res.status(200).json({
            success: true,
            count: toppers.length,
            data: toppers
        });
    } catch (error) {
        handleError(res, error, "Failed to fetch toppers");
    }
});

// Get single topper
topperRouting.get("/topper/:id", async (req, res) => {
    try {
        const topper = await Toppers.findOne({_id: req.params.id});
        if (!topper) {
            return res.status(404).json({
                success: false,
                message: "Topper not found"
            });
        }
        res.status(200).json({
            success: true,
            data: topper
        });
    } catch (error) {
        handleError(res, error, "Failed to fetch topper");
    }
});

// Update existing topper
topperRouting.put("/topper/:id", upload.single("image"), async (req, res) => {
    try {
        const { id } = req.params;
        const { stdname, marks, year } = req.body;

        // Validate required fields
        if (!stdname || !marks || !year) {
            return res.status(400).json({
                success: false,
                message: "All fields (stdname, marks, year) are required"
            });
        }

        const topper = await Toppers.findById(id);
        if (!topper) {
            return res.status(404).json({
                success: false,
                message: "Topper not found"
            });
        }

        let updateData = {
            stdname,
            marks,
            year
        };

        // Handle file upload if new image was provided
        if (req.file) {
            // Delete old file if it exists
            if (topper.filename) {
                const oldFilePath = path.join(__dirname, '../public/uploads', topper.filename);
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
            updateData.filename = req.file.filename;
            updateData.path = `/uploads/${req.file.filename}`;
        }

        const updatedTopper = await Toppers.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            message: "Topper updated successfully",
            data: updatedTopper
        });
    } catch (error) {
        handleError(res, error, "Failed to update topper");
    }
});

// Delete topper
topperRouting.delete("/topper/:id", async (req, res) => {
    try {
        const topper = await Toppers.findById(req.params.id);
        if (!topper) {
            return res.status(404).json({
                success: false,
                message: "Topper not found"
            });
        }

        // Delete associated file
        if (topper.filename) {
            const filePath = path.join(__dirname, '../public/uploads', topper.filename);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        }

        await Toppers.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Topper deleted successfully"
        });
    } catch (error) {
        handleError(res, error, "Failed to delete topper");
    }
});

module.exports = topperRouting;