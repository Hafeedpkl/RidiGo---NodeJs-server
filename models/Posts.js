const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const PostsSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    group: {
        type: ObjectId,
        ref: "Group"
    },
    eventType: {
        type: String,
    },
    expirationDate: {
        type: Date
    },
    regMembers: {
        type: [ObjectId],
        ref: 'Profile'
    }
}, { timestamps: true })

const Post = mongoose.model("Posts", PostsSchema);

module.exports = Post;