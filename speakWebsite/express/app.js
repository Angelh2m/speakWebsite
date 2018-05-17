let express = require('express');
let app = express();
const path = require('path');

var unirest = require('unirest');

// unirest.post('http://mockbin.com/request')
//     .headers({
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     })
//     .send({ "parameter": 23, "foo": "bar" })
//     .end(function(response) {
//         // console.log(response.body);
//     });

app.use(express.static(path.join(__dirname, '../dist/speakWebsiteApp')));

app.get('*', function(req, res) {

    res.sendFile(__dirname + '../dist/speakWebsiteApp/index.html');

});

app.listen(3000, () => {
    console.log('Express serving http://localhost:3000/: \x1b[32m%s\x1b[0m', 'online');

});