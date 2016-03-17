
var tarifs = require('../schema/tarifs');
exports.Tarif = mongoose.model('Tarif',tarifs.schema);

var uses = require('../schema/users');
exports.Use = mongoose.model('Use',uses.schema);

var tags = require('../schema/tags');
exports.Tag = mongoose.model('Tag',tags.schema);

var specialites = require('../schema/specialites');
exports.Specialite = mongoose.model('Specialite',specialites.schema);

var domaines = require('../schema/domaines');
exports.Domaine = mongoose.model('Domaine',domaines.schema);
