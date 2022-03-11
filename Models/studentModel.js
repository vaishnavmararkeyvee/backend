const mongoose= require("mongoose")
//schema
let  mongooseSchema=mongoose.Schema

const studentSchema=new mongooseSchema(
    {
        
        name:String,
        rollnumber:Number,
        standard:Number,
        division:String,
        mobileno:Number,
        classid:Number
    }
)
//model creation
var studentModelobj=mongoose.model("students",studentSchema)
module.exports={studentModelobj}