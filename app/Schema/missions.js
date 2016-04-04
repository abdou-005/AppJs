/**
 * Created by abdo on 2016-03-26.
 */

var adresses = require('./adresses');
var avis = require('./avis');
exports.schema = new mongoose.Schema({
		name : String,
		desc : String,
		dateAdded : {type:Date, default: Date.now},
		startDate : {type: Date},
		endDate : {type:Date},
		state : ['waiting','inruns','finish'],

		adresse : adresses.schema,
		avi : avis.schema
	}
)