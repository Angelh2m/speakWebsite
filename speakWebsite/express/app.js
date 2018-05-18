const express = require('express');
const app = express();
const path = require('path');
const unirest = require('unirest');
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const base64url = require('base64url');
var request = require('request');
var config = {
    'secret': 'supersecret'
}

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


app.get('/getToken', (req, res) => {

    var body = req.body;
    console.log(body);
    let jwt = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvYXV0aGFkbWluQGl2b3J5LXN0dWRpby0yMDQwMDMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2xvdWQtcGxhdGZvcm0iLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE1MjY1ODcyNjQxNjIsImlhdCI6MTUyNjU4NzI2MDU2Mn0.rxEMDTO0ZAxfMfk36kvkF4utSr2YY-q3VRpKsw2Z0Qzp_4DruFfKXEysQOuJUYH8VSZ6b9tl30HYq7FudAUDvvUjcjaHw-r55uVKIZXsNgNYlYc_FPkeR_AQO0U4fYdHqcx9tiGmFyNw0fyn3VJr9E1SzAuGJgiyLg0N19LH41G_2Xhe-sNgOPEAzMhyjk07x-EgMol6_0VYAEb8On6khmA7tYJsEfSwLOMXDZxiATgy9yec4QSBlbvzOAMvNrmnvZN7mcHlSg3pWIGOIQb6HhkvhRMDMToHZxwns78BNwT9T_sQ_Qog5b_8Ea4ljsHlWd1EYzYSg3nRk35OFc__iA";
    let jwtEnctypted = `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`;

    console.log(jwtEnctypted);

    unirest.post('https://www.googleapis.com/oauth2/v4/token')
        .headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        })
        .send(jwtEnctypted)
        .end(function(response) {
            return res.status(200).json({
                ok: true,
                message: 'Here is the token from google',
                token: response
            });

        });



});

app.get('/getFreshToken', (req, res) => {

    var response = unirest.get('https://ivory-studio-204003.appspot.com');

    request('https://ivory-studio-204003.appspot.com', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(response);

            console.log(body) // Print the google web page.
            return res.status(200).json({
                ok: true,
                message: 'Here is the token from google',
                token: response,
            });
        }
    })



});

app.post('/jwt', function(req, res) {

    var scope = 'https://www.googleapis.com/auth/cloud-platform';
    var ACCESS_TOKEN_AUD = 'https://www.googleapis.com/oauth2/v4/token'
    var GRANT_TYPE = 'urn:ietf:params:oauth:grant-type:jwt-bearer';
    // var millis = Date.now();
    var millis = Math.floor(new Date().getTime() / 1000);
    // millis = Math.floor(millis / 1000);

    var minutes = Math.floor(millis / 60000);
    console.log('Minutes ', minutes);
    console.log('millis ', millis);


    var credentials = {
        "type": "service_account",
        "scope": 'https://www.googleapis.com/auth/cloud-platform',
        "project_id": "ivory-studio-204003",
        "private_key_id": "71fdb3f9d9a66d27b4dbbfadf350590f0eece743",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDFwUQHj8cVUYju\nwgYptCRVl4oz7zf6VycHZw5aCzfMEBU/2u4OcOnkH8RWd6RXAiDJqFjy6dG2Jozw\nKkmtz8TGwkJNSun4pL7VTITuxgIWag0JnZSk9ZA6OBme5HJiqcnIDKPY3atWuFy3\nd3XAaH7eUfloXzFA7ru2tQI5hF6YtYo/b+ESBlDXlgW1uofcXg2OiA/E/wllX3lF\n66HtuzP14tetJwgQAlG1IoJZ3NRtwCJPFJZq8VxidLfs2Kh0UwBB9c32qEGiciFP\n/kAf8AVu66/xXDnPEvXzAGw4GUaV6MrjgmMZ0XX4xmZU5Hc0NcNOm6exqCSQ/iyi\nio9ioXgdAgMBAAECggEADiNFsc9dnvCNUZnIHFh8oIHiUi7arv28FJNm5e5stsdk\n6C5xW9GcEcBo+6WMt4u3ZwivaJkUHRRJzyxhcsOqgGsy7O5be83gtsRvBy2wyIQc\nb9Y24kmMCMgp92oYThAav5U9Ftas1oOnspYfx6Rbgu6+s0Ta80FzZMSGvDCdHV2n\nm/U0o+Z647E1TwM/4q4Z6CeQftOEvnJyB1Ami+UuZToD49XLLje/OK3qiUU7t0dZ\nvWB1xexwrDlhN4abwI9GnsSuRByZl6UYNl/nADjne70JM00QvERI987wpkksOGfa\n4Vs8DeEOQsevRcE5R6jZF8DEyyDvB+NBB/NLiXBRIQKBgQDxgiFQsUt9reBen6Px\nSn0M6q3Sh63h5FfDmdlJLex2NPDj72SlHy6KlRk5YignWh8VZg0fq5fmZJ0wnM+2\nNTbC5YyN/EvqRBCsz/ULOcBj7/5TebXq/tDk/LC3i7LMex/H70uDw9Zumrwxv4Wd\nDcFEsDflWMl4YEpFm1DI9kGIxwKBgQDRnwdto9/A+iHa8ccYNnzMuCum0PxzmWgj\nlO55mk3QkEIHF2uZ8WVUSbfOnyGI/Ltd9EYW9ph7M1kywWa+293sdQARmeT9h4pn\nx7cscQvN08VQgFdDFaE3ND13xob6PKgxzdoOMPv32+TLFrpCt3V5MeKQTcZeMb5X\nxdwwYdG7+wKBgQDjFcArtrnMEA2UC7nErYzN83DEL+3RJLtdYbFNPRBFydvkB3p0\nRNCnYDDaozAsaHIn1dBrQhbPfTXMuvYYVwsJ0XwLGftr6NphFB1Ok9wSXFygsyXa\nNAXJ+sxTmdjiqrckcR5pZGChmX9xq6uAFKnw4117mrO+K5RKxRL+E4dliwKBgQDI\nl3/KQXkK99GR7K/y0aFXXh4XggEytehbtFcIcspn/MPSeWz0YXXv1KNZzBmRNxgt\nbmXr74o2ywpecYhat5eEgOnR7gydOCkP6qO0mXEMQ8ybnlTi0z30z77KcWYU7Bqf\nnjc+QU28/+XPGi6fTWPS2BPQtzxOQxe8cpCkk9baJQKBgQDeD8or6VXe38jsspDf\nVExoWsv1878baRs8A3SDpPq0JAUC0a8dH4EevWlMAbhBPtQQjb7fdGKKbFhS0yyz\n8mCSck3nE9BYXhnRi0k/9QH0P916qjkciv0R8mXyORUkdDRddMktlrve0lsrhsWZ\n7cV6b0IaDpxc6MjTkgvG/rj3yQ==\n-----END PRIVATE KEY-----\n",
        "client_email": "oauthadmin@ivory-studio-204003.iam.gserviceaccount.com",
        "client_id": "110509308621589582140",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://accounts.google.com/o/oauth2/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/oauthadmin%40ivory-studio-204003.iam.gserviceaccount.com"
    }

    var encodedJWT;
    let jwt_claims = {
        'iss': credentials.client_email,
        'scope': credentials.scope,
        'aud': ACCESS_TOKEN_AUD,
        'exp': millis + 1000,
        'iat': millis
    };

    console.log('exp: ', jwt_claims.exp);
    console.log('iat: ', jwt_claims.iat);

    let jwtHeader = { 'alg': 'RS256', 'typ': 'JWT' };


    jwt_claims64Encrypted = base64url(JSON.stringify(jwt_claims));
    jwt_claims64Encrypted = JSON.stringify(jwt_claims);
    console.log('Encoded JWT: ', jwt_claims64Encrypted);

    let jwtHeade64Encrypted = base64url(JSON.stringify(jwtHeader));
    console.log('jwt64 ==> : ', jwtHeade64Encrypted);

    var temp_encode = `${jwtHeade64Encrypted}.${jwt_claims64Encrypted}`;

    console.log('temp_encode: ===>>>> ', temp_encode);

    var token = jwt.sign(jwt_claims, credentials.private_key);
    console.log('SIGNED JWT TOKEN: ', token);

    var econdedToken = base64url(token);
    // Encrypted header concat with dot and encypted claim 
    var payload = `${temp_encode}.${econdedToken}`;
    console.log('PAYLOAD ==>> ', payload);

    // payload = base64url(payload);

    console.log('PAYLOAD =====>>>>>>>>>', payload);
    var body = {
        'grant_type': GRANT_TYPE,
        'assertion': payload
    }

    // console.log('TOKEN ===============> ', token);

    unirest.post(ACCESS_TOKEN_AUD)
        .headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        })
        .send(body)
        .end(function(response) {
            return res.status(200).json({
                ok: true,
                message: 'Here is the token from google',
                token: response
            });

        });

    // res.status(200).send({
    //     auth: true,
    //     jwtSigned: jwtSigned,
    //     hashedPassword: hashedPassword,
    //     res: encodedJWT
    // });

});


app.get('*', function(req, res) {

    res.sendFile(__dirname + '../dist/speakWebsiteApp/index.html');

});

app.listen(3000, () => {
    console.log('Express serving http://localhost:3000/: \x1b[32m%s\x1b[0m', 'online');
});