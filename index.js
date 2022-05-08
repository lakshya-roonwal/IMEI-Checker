const express = require('express');
const isValidIMEI=require('./function')
bodyParser=require('body-parser')
const app=express();
const port =80;

// app.use(express.static('./public'))
app.set('view engine','pug')
const urlencoded=bodyParser.urlencoded({extends:false})

app.get('/',(req,res)=>{
    res.render('checker.pug',{msg:""});
})

app.post('/checkIMEI',urlencoded,(req,res)=>{
    const isvalid=isValidIMEI(req.body.imei);
    if (isvalid) {
        res.render('checker.pug',{msg:"IMEI is valid"})
    } else {
        res.render('checker.pug',{msg:"IMEI is not valid",value:req.body.imei})
    }
})


app.listen(port,(req,res)=>{
console.log(`Server successfully started on http://localhost:${port}`)
})