var demanderDevis = require('../controllers/demanderDevis');

app.get('/demanderDevis',demanderDevis.index);
app.post('/demanderDevis',demanderDevis.create);
app.get('/demanderDevis/:id',demanderDevis.one);
app.put('/demanderDevis',demanderDevis.update);
app.delete('/demanderDevis/:id',demanderDevis.delete);