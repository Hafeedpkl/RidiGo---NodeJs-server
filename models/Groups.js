const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const GroupSchema = new mongoose.Schema({
    admin: {
        type: String,
        required: true
    },

    groupName: {
        type: String,
        required: true
    },

    members: {
        type: [String],
    },
    events: {
        type: [ObjectId],
        ref: "Posts"
    },
    rides: {
        type: [ObjectId],
        ref: "Posts"
    },
    image: {
        type: String,
        default:"public\\Profile\\2023-03-13T10-28-30.114Zscaled_images (3).png"
    },
    messageUpdate: {
        type: Date
    }
}, { timestamps: true })

const Group = mongoose.model("Group", GroupSchema);

module.exports = Group;