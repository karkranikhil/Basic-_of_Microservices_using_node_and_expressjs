const mongoose = require("mongoose");

// A model is a ref to our collection
/** @params 
 * a) name of model
 * b) SCHEMA **/
mongoose.model("Book",{
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true 
    },
    numberPages:{
        type:Number,
        require:false 
    },
    publisher:{
        type:String,
        require:false 
    }
})