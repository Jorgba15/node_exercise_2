const express = require('express');
const app = express();

app.get('/:id', function(req, res) {
  res.send('hello ' + req.params.id);
});

app.use(express.static("./public"));

app.listen(process.env.port || 8080, function () { // do something with the port
  console.log('Star wars');
});

console.log("for noe drit");
// skjønner ingenting
