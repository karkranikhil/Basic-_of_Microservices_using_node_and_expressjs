//load express
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//load mongoose
const  mongoose = require('mongoose')

require("./Book")
const Book = mongoose.model("Book")
//connect
mongoose.connect("mongodb://karkra:nikhil123@ds123783.mlab.com:23783/booksservice",()=>{
    console.log('db connected')
})

app.get('/', (req, res)=>{
    res.send('This is our main books service')
})

// create func for book
app.post("/book", (req,res)=>{
    let newBook = {
        title:req.body.title,
        author:req.body.author,
        numberPages:req.body.numberPages,
        publisher:req.body.publisher
    }
    // new model instance
    let book  = new Book(newBook)
    book.save().then(()=>{
        res.send("new book created successfully")
    }).catch((err)=>{
        throw err
    })

})

// list all book of our application
app.get("/books", (req, res)=>{
    Book.find().then((books)=>{
        res.json(books)
    }).catch((err)=>{
       if(err){
           throw err
       }
    })
})

// find book based on particular id
app.get("/book/:id", (req, res)=>{
    Book.findById(req.params.id).then((book)=>{
        if(book){
            res.json(book)
        } else {
            res.sendStatus(404)
        }
    }).catch((err)=>{
       if(err){
           //throw err
           console.log('eror')
       }
    })
})

// delete the book
app.delete('/book/:id',(req,res)=>{
    Book.findOneAndRemove(req.params.id).then(()=>{
        res.send("book removed Successfully")
    }).catch(err=>{
        if(err){
            throw err
        }
    })
})
app.listen(3333, ()=>{
    console.log('up and running-- this is our service')
})