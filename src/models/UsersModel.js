const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: [3, "The name must be at least 3 letters long"],
        max: [36, "The name must consist of 36 letters"],
    },
    surname: {
        type: String,
        required: true,
        min: [3, "The surname must be at least 3 letters long"],
        max: [36, "The surname must consist of 36 letters"],
    },
    username: {
        type: String,
        required: true,
        unique: true,
        min: [3, "The nickname must be at least 3 letters long"],
        max: [36, "The nickname must consist of 36 letters"],
    },
    password: {
        type: String,
        required: true,
    },
})

const users = mongoose.model("users", userSchema);

module.exports = users;
