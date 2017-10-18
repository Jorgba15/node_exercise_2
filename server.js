const express = require('express');
const app = express();

app.get('/:id', function(req, res) {
  res.send('hello ' + req.params.id);
});

app.use(express.static("./public"));


console.log("for noe drit");
// skjønner ingenting
