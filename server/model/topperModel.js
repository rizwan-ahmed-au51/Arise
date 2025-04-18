let mongoose = require("mongoose");
const { type } = require("os");


let topperSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
    filename: {
        type: String,
        required: true,
    },
    marks: {
        type: Number,
        required: true,
    },
    stdname: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model("toppers", topperSchema);