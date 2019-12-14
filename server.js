var express = require('express');

var app = express();

var artists = [
    {
        id: 1,
        name: 'Metallica'
    },
    {
        id: 2,
        name: 'Iron Maiden'
    },
    {
        id: 3,
        name: 'Deep Purple'
    }
];

app.get('/', function(req, res){
    res.send('HELLO API');
});

app.get('/artists', function(req, res){
    res.send(artists);
});

app.get('/artists/:id', function(req, res){
    var artist = artists.find(function(artist){
        return artist.id === Number(req.params.id);
    });
    res.send(artist);    
});

app.listen(3012, function(){
    console.log('API started at port 3012');
})