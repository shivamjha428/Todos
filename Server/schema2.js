const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    Activity:String
})

const  postModal = mongoose.model("Todo",postSchema)

module.exports = postModal;