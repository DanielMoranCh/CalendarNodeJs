const mongoose = require('mongoose')
	const Schema = mongoose.Schema

	let UserSchema = new Schema({
		userId:{ type: Number, require: true, unique:true },
		nombre:{ type: String, require: true },
		usuario:{ type: String, require: true },
    password:{ type: String, require: true } }
	})
	lef UserModel = mongoose.model('Usuario', UserSchema)
	module.exports = UserSchema
