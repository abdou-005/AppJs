
exports.schema = new mongoose.Schema({
		nameservice:{type : String, maxlength:50},
		desc:String,
		remise:String,
		prix:{type : String, maxlength:50}
	}
)
