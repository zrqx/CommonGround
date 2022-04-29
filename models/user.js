const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    college: {
        type: Schema.Types.ObjectId
    },
    interests: {
        type: [String]
    },
    spaces: {
        type: [Schema.Types.ObjectId]
    }
})
module.exports = mongoose.model('user', userSchema)