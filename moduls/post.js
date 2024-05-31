const mongoose = require('mongoose');



const ModelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    ,
    created_at:{
        type:Date,
        default :Date.now
    },
    comments: {
        type: [{
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            comment: String,
           

        }],
        default: []
    }

});
module.exports = mongoose.model('Post', ModelSchema)