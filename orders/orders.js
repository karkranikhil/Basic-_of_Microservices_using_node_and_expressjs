//load express
const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//load mongoose
const  mongoose = require('mongoose')
//load model
require("./Order")
const Order = mongoose.model("Order")
//connect
mongoose.connect("mongodb://karkra:nikhil123@ds259089.mlab.com:59089/orders",()=>{
    console.log('db connected')
})

app.post("/order", (req, res)=>{
    let newOrder = {
        CustomerID:mongoose.Types.ObjectId(req.body.CustomerID),
        BookID:mongoose.Types.ObjectId(req.body.BookID),
        initialDate:req.body.initialDate,
        DeliveryDate:req.body.DeliveryDate
    }
    let order = new Order(newOrder)
    order.save().then(()=>{
        res.send("order created successfully")
    }).catch((err)=>{
        if(err){
            throw err
        }  
    })
})

//get list of all orders
app.get("/orders", (req, res)=>{
    Order.find().then((Order)=>{
        res.json(Order)
    }).catch((err)=>{
        if(err){
            throw err
        }  
    })
})

app.get("/order/:id", (req, res)=>{
    Order.findById(req.params.id).then((order)=>{
        if(order){
            axios.get("http://localhost:5555/customer/"+ order.CustomerID).then((custResponse)=>{
                let orderObject = {customerName: custResponse.data.name, bookTitle:''}
                axios.get("http://localhost:3333/book/"+ order.BookID).then((bookResponse)=>{
                    orderObject.bookTitle = bookResponse.data.title
                    res.json(orderObject)
                })
                //res.send(response)
            })
        } else {
            res.send("Invalid Order")
        }
    })
})

app.listen("7777", ()=>{
    console.log("Up and running - Orders service at port 7777")
})