const mongoose = require("mongoose")
const Message = mongoose.model("Message")

module.exports = {
	index: (req, res) => {
		Message.find({})
			.then(messages => {
				res.render("index", {messages: messages})
			})
			.catch(err => {
				console.log("index error", err)
				res.json(err)
			})
	},
	new_message: (req, res) => {
		var new_message = new Message(req.body)
		new_message.save()
			.then(() => {
				res.redirect("/")
			})
			.catch(err => {
				console.log("message create error", err)
				res.json(err)
			})
	},
	new_comment: (req, res) => {	
		Message.findOne({_id: req.body.message_id})
			.then(message => {
				var new_comment = {name: req.body.name, comment: req.body.comment}
				message.comments.push(new_comment)
				message.save()
			})
			.then(() => {
				res.redirect("/")
			})
			.catch(err => {
				console.log("Comment create error", err)
				res.json(err)
			})
	},
}