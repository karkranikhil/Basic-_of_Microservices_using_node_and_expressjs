//load express
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//load mongoose
const  mongoose = require('mongoose')
//load model
require("./Customer")
const Customer = mongoose.model("Customer")
//connect
mongoose.connect("mongodb://karkra:nikhil123@ds225543.mlab.com:25543/customersservice",()=>{
    console.log('db connected')
})

app.post("/customer", (req, res)=>{
    let newCustomer = {
        name:req.body.name,
        age:req.body.age,
        address:req.body.address
    }
    let customer = new Customer(newCustomer)
    customer.save().then(()=>{
        res.send("new customer created successfully")
    }).catch((err)=>{
        if(err){
            throw err
        }  
    })
})

//get list of all customers
app.get("/customers", (req, res)=>{
    Customer.find().then((customers)=>{
        res.json(customers)
    }).catch((err)=>{
        if(err){
            throw err
        }  
    })
})

//get single customer
app.get("/customer/:id", (req, res)=>{
    Customer.findById(req.params.id).then((customer)=>{
        if(customer){
            res.json(customer)
        } else {
            res.sendStatus('invalid id')
        }
    }).catch((err)=>{
       if(err){
           //throw err
           console.log('eror')
       }
    })
})

// delete the customer
app.delete('/customer/:id',(req,res)=>{
    Customer.findOneAndRemove(req.params.id).then(()=>{
        res.send("customer removed Successfully")
    }).catch(err=>{
        if(err){
            throw err
        }
    })
})

app.listen("5555", ()=>{
    console.log("Up and running - customers service")
})