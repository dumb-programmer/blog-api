const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String, require: true },
    body: { type: String, require: true },
    author: { type: mongoose.SchemaType.ObjectId, ref: "User", require: true },
    comments: [{ type: mongoose.SchemaType.ObjectId, ref: "Comment", require: true }]
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);