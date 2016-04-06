var demanderDevis = require('../controllers/demanderDevis');

app.get('/Devis',demanderDevis.index);
app.post('/demanderDevis',demanderDevis.create);
app.get('/demanderDevis/:id',demanderDevis.one);
app.put('/demanderDevis/:id',demanderDevis.update);
app.delete('/demanderDevis/:id',demanderDevis.delete);