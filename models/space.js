const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const spaceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    users: {
        type: [Schema.Types.ObjectId]
    },
    messages: {
        type: [Schema.Types.ObjectId]
    }
})
module.exports = mongoose.model('space', spaceSchema)