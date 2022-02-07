const express =require( 'express');
var app =express();

//Route 
app.get('/', function(req,res){
    res.send('Hello world')
})

//MongoDB connection 
mongoose.connect( 'mongodb: //localhost/test ',{
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