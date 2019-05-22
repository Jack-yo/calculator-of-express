var express=require('express');

var app= new express();

var querystring=require('querystring');

app.post('/',function(req,res){

var data='';

req.on('data',function(chunk){


      data+=chunk; });
	  
req.on('end',function(){
	
	var post=querystring.parse(data);
	
   if(post.data){
	   
	   res.write(post.data+'='+eval(post.data));
   }
	
	res.end();
	
	console.log(post.data);});






});

app.listen('3000','127.0.0.1');