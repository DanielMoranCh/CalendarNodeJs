const mongoose = require('mongoose')
	const Schema = mongoose.Schema

	let UserSchema = new Schema({
		userId:{ type: Number, require: true, unique:true },
		nombres:{ type: String, require: true },
		apellidos:{ type: String, require: true },
		edad:{ type: Number, require: true },
		sexo:{ type: String, require: true, enum: ['M', 'S']},
    usuario:{ type: String, require: true },
    password:{ type: String, require: true },
		estado:{ type: String, require: true, enum: ['Activo', 'Inactivo'] }
	})
	lef UserModel = mongoose.model('Usuario', UserSchema)
	module.exports = UserSchema
