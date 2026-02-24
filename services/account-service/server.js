require("./src/config/env");

const mongoose = require('mongoose');
const app = require("./app");

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

mongoose.connect(MONGO_URL).then(()=>{
    console.log("Connection successfull");
}).catch(()=>{
    console.log("Failed to connect with Account Service");
})

const server = app.listen(PORT, ()=>{
    console.log("Running via port:", PORT);
})