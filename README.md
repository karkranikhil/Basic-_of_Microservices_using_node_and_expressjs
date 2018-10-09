# Basic of Microservices using node and expressjs

### What is Microservice ?
<p>microservices, is a distinctive way of developing software systems that mainly focus on building single-function modules with well-defined interfaces and operations. </p>

### Technologies used:
<p><b>node version 8.11.3 - </b>Node.js is a JavaScript run-time environment.The Node run-time environment includes everything you need to execute a program written in JavaScript.</p>
<p><b>express version 4.16.3 - </b> ExpressJS is a web application framework that provides you with a simple API to build websites, web apps and back ends.</p>
<p><b>axios version 0.18.0 - </b>Used for interacting with the other services</p>
<p><b>body-parser version 1.18.3 - </b> It helps in extracting the entire body portion of an incoming request stream and exposes it on req.body</p>
<p><b>mongoose version 5.3.2- </b>Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.</p>
<p><b>mLab - </b> is the leading Database-as-a-Service for MongoDB</p>
<p><b>Postman - </b>Postman is a great tool when trying to dissect RESTful APIs made by others or test ones you have made yourself. It offers a sleek user interface with which to make HTML requests, without the hassle of writing a bunch of code just to test an API's functionality.</p>



### Service 1 - Books

<p><b>Method - </b> POST</p>
<p><b>Endpoint - </b> /book</p>
<p><b>Description - </b> it will create a new book record in the DB</p>
<p><b>Payload</b></p>
  
   {
   "title": "angular js from scratch",
    "author": "nik",
    "numberPages": 350,
    "publisher": "nixalar up"
    }
<p><b>Response - </b>new book created successfully</p>    
    

