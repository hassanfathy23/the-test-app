const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const namesSchema = new Schema({
    name: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model("Name", namesSchema);