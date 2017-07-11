const mongoose = require("mongoose")

var CommentSchema = new mongoose.Schema({
	name: String,
	comment: String,
}, {timestamps: true})

var MessageSchema = new mongoose.Schema({
	name: String,
	message: String,
	comments: [CommentSchema],
}, { timestamps: true})

mongoose.model("Message", MessageSchema)
var Message = mongoose.model("Message")