const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
	name: String
}, { timestamps: true})

mongoose.model("User", UserSchema)