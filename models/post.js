const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String, require: true },
    body: { type: String, require: true },
    author: { type: mongoose.SchemaTypes.ObjectId, ref: "User", require: true },
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);