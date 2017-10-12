const express = require('express');
const app = express();

app.get('/:id', function(req, res) {
  res.send('hello ' + req.params.id);
});

app.use(express.static("./public"));

app.listen(8080, function () {
  console.log('Star wars');
});
