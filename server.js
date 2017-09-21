const express = require('express');
const myBodyParser = require('./my-body-parser');
const app = express();

app.use(myBodyParser.urlencoded());

app.post('/', function(req, res){
    console.log(req.body);
})

app.listen(7777);