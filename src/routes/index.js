const path = require('path');
const express = require('express');
const nodemailer = require("nodemailer");
var CronJob = require('cron').CronJob;
const router = express.Router();


///LOGICA EN SERVIDOR

/***
 *  Cron job se ejecuta todos los dias a las 23hs
***/
const job = new CronJob('0 0 23 * * *', function() {
 
 let datem = new Date();
   

})

job.start()
///

///GETS:


router.get('/',(req,res) => {
  
    res.sendFile('index.html', {root: __dirname });
    console.log('>_ visitaNueva!')
          
});



module.exports = router;
