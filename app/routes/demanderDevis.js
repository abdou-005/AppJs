var express = require('express');
var demanderDevis = require('../controllers/demanderDevis');

<<<<<<< HEAD
var devisRoutes = express.Router();

devisRoutes.route('/demande')
	.get(demanderDevis.index)
	.post(demanderDevis.create)
	.put(demanderDevis.update);

devisRoutes.route('/demande/:id')
	.get(demanderDevis.one)
	.delete(demanderDevis.delete);

/*
app.get('/demanderDevis',demanderDevis.index);
app.post('/demanderDevis',demanderDevis.create);
app.get('/demanderDevis/:id',demanderDevis.one);
app.put('/demanderDevis',demanderDevis.update);
app.delete('/demanderDevis/:id',demanderDevis.delete);
*/
module.exports = devisRoutes;
=======
app.get('/Devis',demanderDevis.index);
app.post('/demanderDevis',demanderDevis.create);
app.get('/demanderDevis/:id',demanderDevis.one);
app.put('/demanderDevis/:id',demanderDevis.update);
app.delete('/demanderDevis/:id',demanderDevis.delete);
>>>>>>> 5cfec3696feac96a9a12b50f17cf54bb97a24c0e
