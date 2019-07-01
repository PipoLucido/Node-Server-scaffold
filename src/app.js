const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express();

const indexRoutes = require('./routes/index');

//settins
app.use(compression());
app.set("port",8080);
//app.set("port",process.env.PORT || 443);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

//midleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);

app.listen(app.get('port'),() => {
    console.log('*.* / ---> Server on port:', app.get('port'));
});



///https
/*

const path = require('path');
const express = require('express');
const express2 = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const https = require('https');
const app = express();
const fs = require('fs');
const indexRoutes = require('./routes/index');

//settins

const httpsOptions = {
    cert:   fs.readFileSync(path.join(__dirname , 'ssl', 'domain.crt') )       ,
      key:  fs.readFileSync(path.join(__dirname , 'ssl', 'domain.key') )
    }




//app.set("port",process.env.PORT || 80);
//app.set("port",process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

//midleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);
/*
app.listen(app.get('port'),() => {
    console.log('*.* / ---> Server on port:', app.get('port'));
});*//*

https.createServer(httpsOptions, app)
    .listen(443, function(){
        console.log('server corriendo')
    })


///redirect to https from http

var http = express2();

// set up a route to redirect http to https
http.get('*', function(req, res) {  
    res.redirect('https://agenciabyrons.com');

    // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
    // res.redirect('https://example.com' + req.url);
})

http.listen(80);
*/


