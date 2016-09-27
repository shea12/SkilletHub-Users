var express = require('express');
var service = express();

var port = process.env.PORT || 8080;
service.listen(port, function() {
  console.log('SkilletHub Users service running on port: ', port);
});

// import router, assign to /user/wildcard route
var usersRouter = require('./routes.js');
service.use('/user', usersRouter);

service.get('/', function (req, res) {
  res.json({ message: 'This is the SkilletHub Users Service' });
});


module.exports = service;