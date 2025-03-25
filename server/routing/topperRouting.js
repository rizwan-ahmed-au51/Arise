let express = require('express');
let multer = require('multer');
let Toppers = require("../model/topperModel");
let topperRouting = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage: storage });


topperRouting.post("/topper", upload.single("image"), async (req, res) => {
    const { path, filename } = req.file;
    const { marks, stdname } = req.body;
    let topper = new Toppers({ path, filename, marks, stdname });
    let result = await topper.save();
    res.send(result);
});

topperRouting.get("/topper", async (req, res) => {
    let topper = await Toppers.find().sort({ marks: -1 });
    res.send(topper);
});

module.exports = topperRouting;