const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String, require: true },
    body: { type: String, require: true },
    isPublished: { type: Boolean, require: true, default: false },
    author: { type: mongoose.SchemaTypes.ObjectId, ref: "User", require: true },
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);