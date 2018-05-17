const express = require('express');
const app = express();
const path = require('path');
const unirest = require('unirest');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../dist/speakWebsiteApp')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.post('/getToken', (req, res) => {

    var body = req.body;

    console.log(body);


    unirest.post('http://mockbin.com/request')
        .headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
        .send({ "parameter": 23, "foo": "bar" })
        .end(function(response) {
            // console.log(response.body);

            return res.status(200).json({
                ok: true,
                message: 'Here is the token',
                token: response
            });

        });

});

app.get('*', function(req, res) {

    res.sendFile(__dirname + '../dist/speakWebsiteApp/index.html');

});

app.listen(3000, () => {
    console.log('Express serving http://localhost:3000/: \x1b[32m%s\x1b[0m', 'online');

});