const express = require('express');
const fs = require('fs');

const app = express();

const port = process.env.PORT || 8090;
app.listen(port, function() {
    console.log('server listening to port %s', port);
});

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login', function(req, res) {
    res.end('login successful');
});

app.get('/products', function(req,res) {
    res.json([{"name" : "samsung", "price": 5000}]);
});

app.get('/getmovies', (req, res) => {

    var data = fs.readFileSync('./movies.json');
    var movies = JSON.parse(data);
    console.log(movies);


    res.json(movies);
});