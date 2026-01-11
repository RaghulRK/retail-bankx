require("./src/conifg/env");
const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL).then(() => {
    console.log("MONGO DB connection is successfull");
}).catch(() => {
    console.log("Failed to connect DB");
})

const server = app.listen(PORT, () => {
    console.log("Auth service is running via", PORT);
})