let express = require("express");
let cors = require("cors");
const signupRouting = require("./routing/signupRouting");
const batchdateRouting = require("./routing/batchdateRouting");
require("./dbconfig/dbconfig");

let app = express();
app.use(express.json());
app.use(cors());
app.use("/", signupRouting);
app.use("/", batchdateRouting);


app.listen(4000, () => console.log("Server is Ready👍"));
