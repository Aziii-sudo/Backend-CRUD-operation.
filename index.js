// import form from './index.html';
const express =require( 'express');
var app =express();
var mongoose = require('mongoose')


//Route 
app.get('/', function(req,res){
    res.send('Hello world')
})

//MongoDB connection 
mongoose.connect( 'mongodb://localhost/test ',{
    UseNewUrlParser: true

} );
mongoose.connection.once('open', function(){
    console.log('Database connected successfully');

}).on('error',function(err){
    console.log('Error',err);
})

//Server 
app.listen(4000, function(){
    console.log('Server is started')
})





const router = require('./routes/student')

app.use('/Std', router)