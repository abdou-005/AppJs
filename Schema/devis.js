/**
 * Created by abdo on 2016-03-25.
 */

var offres = require('./offres');
var missions = require('./missions');

exports.schema = new mongoose.Schema({
		title : String,
		contents : String,
		dateAdded : {type: Date, default: Date.now},
		dateWork : {type: Date},
		durationWork : String,
		state : ['waiting', 'confirm'],
		type : ['emergency','normal'],

		offres : [offres.schema],
		mission : missions.schema
	}
)
