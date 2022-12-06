const express=require('express')
const mongoose=require('mongoose')
const path=require('path')
var app=express();
const port=200;
const fs=require('fs')

/* //Mongoose Connect
mongoose.connect('mongodb://127.0.0.1:27017/testt',{useNewUrlParser:true,useUnifiedTopology:true})

const db=mongoose.connection;
db.on('Error',console.log.bind('error'))
db.once('open',function(){
    console.log('Connected..')
})

///schema
const testt=mongoose.Schema({
    name:String
})

testt.methods.speak=function(){
    const greeting='My name is '+ this.name;
    console.log(greeting)
}
//schema model
const Kitten=new mongoose.model('Murshidsh',testt)

//schema document
const obj=Kitten({name:'Murshid'})
/* console.log(obj.name)
obj.speak(); */
/*
//save
obj.save('Murshidsh',function(err,k){
    if(err)return console.error(err);
    k.speak();
})
//find
Kitten.find({name:'Murshid'},function(err,k){
    if(err)return console.error(err);
    console.log(k)
}) */



//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'))
app.use(express.urlencoded())
//specified engine
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'))

///end stuff
app.get('/',(req,res)=>{
    res.render('index.pug')
})
app.post('/contact',(req,res)=>{
    console.log(req.body)
    Name=req.body.name;
    email=req.body.email;
    age=req.body.age;
    phonenumber=req.body.phonenumber;
    let outputText=`the name is ${Name} and email is${email} and age is ${age} and phone number is ${phonenumber}`;
    fs.writeFileSync('text.txt',outputText)
    const param={'Message': 'sent succussfully'}; 
    res.render('index.pug')
})



//listen port
app.listen(port,()=>{
    console.log('Server Connencted')
})


