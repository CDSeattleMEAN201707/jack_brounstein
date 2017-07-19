const path = require("path")

const users = require("./../controllers/users.js")

module.exports = (app) => {
	app.post("/login", users.login)
	app.get("/all_users", users.index)
	app.get("/logout", users.logout)
	app.get("/get_logged_in_user", users.get_logged_in_user)

	app.get("*", (req, res) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	})
}