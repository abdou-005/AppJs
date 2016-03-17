
exports.schema = new mongoose.Schema({
		lieu : String,
		dep : String,
		region : String,
		pos : {lat:String, lng:String},
		codePostal : String
	}
)