/**
 * Created by abdo on 2016-03-08.
 */
var prestations = require('../Schema/prestations');
exports.Prestation = mongoose.model('Prestation',prestations.schema);

var questions = require('../schema/questions');
exports.Question = mongoose.model('Question',questions.schema);

var offres = require('../schema/offres');
exports.Offre = mongoose.model('Offre',offres.schema);

var devis = require('../schema/devis');
exports.Devi = mongoose.model('Devi',devis.schema);

var avis = require('../schema/avis');
exports.Avi = mongoose.model('Avi',avis.schema);

var users = require('../Schema/users');
exports.User = mongoose.model('User',users.schema);

var notifications = require('../schema/notifications');
exports.Notification = mongoose.model('Notification',notifications.schema);

var messages = require('../schema/messages');
exports.Message = mongoose.model('Message',messages.schema);

var medias = require('../schema/medias');
exports.Media = mongoose.model('Media',medias.schema);

var tags = require('../schema/tags');
exports.Tag = mongoose.model('Tag',tags.schema);

var specialites = require('../schema/specialites');
exports.Specialite = mongoose.model('Specialite',specialites.schema);

var domaines = require('../schema/domaines');
exports.Domaine = mongoose.model('Domaine',domaines.schema);

var adresses = require('../schema/adresses');
exports.Adresse = mongoose.model('Adresse',adresses.schema);

var missions = require('../schema/missions');
exports.Mission = mongoose.model('Mission',missions.schema);

var reclamations = require('../schema/reclamations');
exports.Reclamation = mongoose.model('Reclamation',reclamations.schema);

var documents = require('../schema/documents');
exports.Document = mongoose.model('Document',documents.schema);
