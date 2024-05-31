const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    posts: [{
        post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"}
    }]
}, { timestamps: true, sparse: true });

module.exports = mongoose.model('User', ModelSchema);