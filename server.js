const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/jocelo-site'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/jocelo-site/index.html'));
})

app.listen(process.env.port || 3000, ()=>{ console.log('Listening in port 3000'); })