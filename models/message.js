const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    sender: {
        type: Schema.Types.ObjectId,
        required: true
    },
    space: {
        type: Schema.Types.ObjectId,
        required: true
    },
    time: {
        type: Date,
        required: true,
        default: Date.now().toString()
    }
})
module.exports = mongoose.model('message', messageSchema)