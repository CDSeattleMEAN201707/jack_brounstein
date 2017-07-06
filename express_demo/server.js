const express = require("express")
const path = require("path")

const app = express()

const PORT = 8000

app.use(express.static(path.join(__dirname, "./client")))

app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs")

app.get("/", (request, response) => {
	numbers = [7, 100, 21, 19, -8]
	response.render("index", {name: "Jack", numbers: numbers} )
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})