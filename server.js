const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/website'));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname + '/dist/website/index.html'));
});

app.listen(process.env.PORT || 3000, function(){ console.log('listening on specified port') });