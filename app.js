const express= require('express')
const bodyParser= require('body-parser')
const mongoose=require('mongoose')
const {studentModelobj}=require('./Models/studentModel')
const port=3001

//initialise
var app= express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//db connect
mongoose.connect("mongodb+srv://vaishnav:vaishnav@cluster0.nyrni.mongodb.net/StudentDatabase?retryWrites=true&w=majority")

app.post('/read',async (req,res)=>{

    try{
    console.log(req.body)
    let mydata=new studentModelobj(req.body) 
    let cloudResponse= await mydata.save()
    res.json(cloudResponse)
    }

    catch(error)
    {
        console.log(error)

    }

});
app.post('/update',async (req,res)=>{

    try{
    console.log(req.body)
    
    let result= await studentModelobj.updateOne({name:req.body.name},{$set:{division:req.body.division}},{$set:{standard:req.body.standard}});
    console.log("Succesfully updated: "+req.body.name);
    res.json("Updated"+req.body.name);
    
    }

    catch(error)
    {
        console.log(error)

    }

});

app.post('/delete',async (req,res)=>{

    try{
    //console.log(req.body)
    
    let result= await studentModelobj.deleteOne({name:req.body.name},{$set:{standard:req.body.standard}});
    console.log("Succesfully Deleted: "+req.body.name );
    res.json("Deleted"+req.body.name);
    
    }

    catch(error)
    {
        console.log(error)

    }

})


//server start
app.listen(port,()=> {
    console.log("your server is running")

})
