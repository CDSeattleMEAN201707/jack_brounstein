var express = require("express")
var path = require("path")

var app = express()
var bodyParser = require("body-parser")

var PORT = 8000

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, "./client")))
app.use(express.static(path.join(__dirname, "./node_modules")))

app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs")

require("./server/config/mongoose.js")

require("./server/config/routes.js")(app)

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
})