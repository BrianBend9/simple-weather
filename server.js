const express = require('express');
const app = express();

app.use('/dist', express.static(__dirname + '/dist'));

app.get('/', function(request, response) {
  response.render('index.html');
});

app.listen(process.env.PORT || 8080);
