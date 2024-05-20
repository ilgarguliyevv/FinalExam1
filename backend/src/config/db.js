const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Server is working");
}).catch(err => {
    console.log("Server is not working" + err);
})