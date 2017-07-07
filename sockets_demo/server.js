const express = require("express")
const path = require("path")

const app = express()

const PORT = 8000

app.use(express.static(path.join(__dirname, "./client")))
app.use(express.static(path.join(__dirname, "./node_modules/jquery/dist")))

app.clicks = 0

const server = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})

const io = require("socket.io").listen(server)

io.on("connection", (socket) => {
	console.log("New connection", socket.id)

	socket.emit("count", app.clicks)

	socket.on("click", () => {
		app.clicks++

		io.emit("count", {clicks: app.clicks, time: new Date()})
	})
})