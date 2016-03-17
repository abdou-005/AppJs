/**
 * Created by abdo on 2016-03-08.
 */

var users = require('../controllers/users');
app.get('/users',users.index);
app.get('/users/:id',users.one);
app.post('/users',users.create);
app.put('/users',users.update);
app.delete('/users/:id',users.delete);