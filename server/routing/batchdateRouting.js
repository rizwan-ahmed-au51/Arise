let express = require("express");
let Batchdates = require("../model/batchdateModel");
let batchdateRouting = express.Router();

batchdateRouting.post("/batchdates", async (req, res) => {
    const { branch, date } = req.body;

    try {
        // Check if the branch already exists
        let existingBranch = await Batchdates.findOne({ branch });

        if (existingBranch) {
            // If the branch exists, check if the date already exists in the array
            if (!existingBranch.date.includes(date)) {
                // Add the new date to the existing branch
                existingBranch.date.push(date);
                await existingBranch.save();
                res.send(existingBranch);
            } else {
                res.status(400).send({ message: "Date already exists for this branch." });
            }
        } else {
            // If the branch doesn't exist, create a new document
            let newBatchdate = new Batchdates({ branch, date: [date] });
            let result = await newBatchdate.save();
            res.send(result);
        }
    } catch (error) {
        res.status(500).send({ message: "Error saving batch date", error });
    }
});



batchdateRouting.get("/batchdates", async (req, res) => {
    let batchdate = await Batchdates.find();
    res.send(batchdate);
});

batchdateRouting.delete("/batchdates/:id", async (req, res) => {
    let batchdate = await Batchdates.deleteOne({ _id: req.params.id });
    res.send(batchdate);
});

module.exports = batchdateRouting;