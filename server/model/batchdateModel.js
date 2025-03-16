let mongoose = require("mongoose");
let moment = require("moment");


let batchdateSchema = new mongoose.Schema({
    branch: {
        type: String,
        required: true,
        trim: true,               // Removes unnecessary whitespace
    },
    
    date: {
        type: [String],
        required: true,
        trim: true,
    },
}, { timestamps: true });  // Automatically adds createdAt and updatedAt fields


// Middleware to format date before saving
// batchdateSchema.pre("save", function (next) {
//     this.date = moment(this.date, "YYYY-MM-DD").format("MMM DD");    // Converts to "Feb 20" format
//     next();
// });

module.exports = mongoose.model("batchdates", batchdateSchema);