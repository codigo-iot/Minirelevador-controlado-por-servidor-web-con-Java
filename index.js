const Gpio = require('onoff').Gpio;
const led = new Gpio(17, 'out');
var express = require('express');
var app = express();
const path = require('path');

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/html/index.html'));
 
});

app.get('/encender', function (req, res) {
        led.writeSync(1);
        res.sendFile(path.join(__dirname+'/html/index.html'));
});

app.get('/apagar',function(req,res){
        led.writeSync(0);
        res.sendFile(path.join(__dirname+'/html/index.html'));
});
app.listen(8000, function () {
    console.log('Servidor corriendo en el puerto 8000');
 });
 
