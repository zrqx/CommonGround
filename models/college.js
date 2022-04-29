const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const collegeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    users: {
        type: [Schema.Types.ObjectId]
    }
})
module.exports = mongoose.model('college', collegeSchema)