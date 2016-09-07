const express = require('express');
const app = express();

app.use('/dist', express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);
