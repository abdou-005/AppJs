
var domaines = require('../controllers/domaines');

app.get('/test',domaines.test);
app.get('/domaines',domaines.index);
app.post('/domaines',domaines.create);
app.get('/domaines/:id',domaines.one);
app.put('/domaines',domaines.update);
app.delete('/domaines/:id',domaines.delete);
