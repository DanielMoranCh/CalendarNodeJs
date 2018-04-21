const mongoose = require('mongoose')
	const Schema = mongoose.Schema

	let AgendaSchema = new Schema({
		Id:{ type: Number, require: true, unique:true },
		userId:{ type: Number, require: true, unique:true },
		titulo:{ type: String, require: true },
		start_date:{ type: Date, require: true },
    end_date:{ type: Date, require: false },
		start_hour:{ type: Timestamp, require: false },
    end_hour:{ type: Timestamp, require: false },
	  allDay:{ type: Boolean, require: false }
	})
	let AgendaModel = mongoose.model('Agenda', AgendaSchema)
	module.exports = AgendaModel
