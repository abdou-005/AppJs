/**
 * Created by abdo on 2016-03-10.
 */
var tags = require('./tags');
var specialites = require('./specialites');

exports.schema = new mongoose.Schema({
		name : String,
		desc : String,
		specialites : [specialites.schema],
		tags : [tags.schema]
	}
)