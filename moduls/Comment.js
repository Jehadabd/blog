const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({


    comments: [{
        created_at: {
            type: Date,
            default: Date.now
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }, post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        },
        comment: String
        ,
        created_at: {
            type: Date,
            default: Date.now
        }
    }]

})
module.exports = mongoose.model('Comment', commentSchema)