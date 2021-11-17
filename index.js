const express = require("express")
const path = require('path');
const bodyParser = require('body-parser');

let app = express();


app.use(express.static('public'));

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000 }))



app.get('/', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '/public') });
});

app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '/public') });
});


const port = 5009;
app.listen(port, () => {
  console.log("***Server Online @ localhost:" + port + "***");
});

// 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
// listen [::]:443 ssl ipv6only=on; # managed by Certbot
