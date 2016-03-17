/**
 * Created by abdo on 2016-03-07.
 */
	'use strict';

var pow = require('pow-mongodb-fixtures');
var fixtures =pow.connect('dbartisans',{
	host : 'localhost',
	port : '27017'
});
var id = pow.createObjectId;
fixtures.load({
	users : [
		{
			"_id":id(),
			"name":"Dupont",
			"lastname":"Maurice",
			"age":"55",
			"job":"Technical support",
			"tel":"0123456789"
		},
		{
			"_id":id(),
			"name":"Valentino",
			"lastname":"Anna",
			"age":"23",
			"job":"Secretary",
			"tel":"0123456789"
		},
		{
			"_id":id(),
			"name":"Barak",
			"lastname":"Shaima",
			"age":"40",
			"job":"Financial assistant",
			"tel":"0123456789"
		}
	]
});
