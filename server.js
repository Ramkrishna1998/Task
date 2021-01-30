const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
let ports = {
  production: 8081,
  development: 3000,
  local: 3000
};

let PORT = ports[process.env.NODE_ENV] || 2330;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// let PORT =  ports[process.env.NODE_ENV];
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log('> Ready on https://localhost:' + PORT);
});
