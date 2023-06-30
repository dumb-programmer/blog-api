const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    name: { type: String, require: true },
    body: { type: String, require: true },
    post: { type: mongoose.SchemaTypes.ObjectId, ref: "Post", require: true }
}, { timestamps: true });

module.exports = mongoose.model("Comment", CommentSchema);