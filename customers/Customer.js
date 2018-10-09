const mongoose = require("mongoose");

// A model is a ref to our collection
/** @params 
 * a) name of model Customer
 * b) SCHEMA **/
mongoose.model("Customer",{
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true 
    },
    address:{
        type:String,
        require:true 
    }
})