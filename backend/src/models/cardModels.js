const mongoose = require("mongoose")

const cardSchema = mongoose.Schema({
    // name: {
    //     type: String,
    //     required: true,
    // },
    // surname: String,
    // userName: String,
    // password: String,
    // email: String,
    // gender: String,
    // isAdmin: String,
    // profilePictures: String,
    // friends: Array,
    // images: Array,
    title: String,
    rating: Number,
    likes: Number,
    description: String,
}, { collection: "User", timeStamps: true })

module.exports = mongoose.model("User", cardSchema)