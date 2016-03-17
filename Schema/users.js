
var tarifs = require('./tarifs');
var adresses = require('./adresses');
var specialites = require('./specialites');
var documents = require('./documents');
var medias = require('./medias');

exports.schema = new mongoose.Schema({
		firstname:{type : String, maxlength:50},
		lastname:{type : String, maxlength:50},
		etat: Boolean,
		code :{type:String, unique:true},
		username :{type:String, unique:true},
		password :{type:String},
		telMobil : {type:String, maxlength:10},
		telDomi : {type:String, maxlength:10},
		dateCreation : {type: Date, default: Date.now},
		dateDebut : {type: Date},
		typeUser : ['client','artisan','admin'],
		type:['autoentropeneur','societe'],
		statut : ['actif', 'nonActif','banner'],
		effectif :Number,
		confirmer : Boolean,
		dispo : Boolean,

		tarifs : [tarifs.schema],
		adresses : [adresses.schema],
		specialites : [specialites.schema],
		documents : [documents.schema],
		medias : [medias.schema]
	}
)