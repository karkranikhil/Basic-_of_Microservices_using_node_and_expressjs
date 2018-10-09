const mongoose = require("mongoose");

// A model is a ref to our collection
/** @params 
 * a) name of model Order
 * b) SCHEMA **/
mongoose.model("Order",{
    CustomerID:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    BookID:{
        type:mongoose.Schema.Types.ObjectId,
        require:true 
    },
    initialDate:{
        type:Date,
        require:true 
    },
    DeliveryDate:{
        type:Date,
        require:true 
    }
    
})