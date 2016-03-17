
exports.schema = new mongoose.Schema({
		name : String,
		desc : String,
		type:String,
		urlDoc : String,
		format : String,
		etat : ['encoure','confirmer']
	}
)