const messages = require("./../controllers/messages")

module.exports = (app) =>{
	app.get("/", messages.index)
	app.post("/new_message", messages.new_message)
	app.post("/new_comment", messages.new_comment)
}
