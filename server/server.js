const express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', (request, response) => {
  response.send('Pehle seedhe khade ho');
})
app.listen(port, (request, response) => {
  console.log(`Server listening at port ${port}...`);
});
