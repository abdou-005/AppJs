
exports.schema = new mongoose.Schema({
		name : String,
		desc : {type:String, default:'description'}
	}
)