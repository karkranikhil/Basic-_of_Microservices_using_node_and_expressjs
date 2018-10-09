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
<p><b>nodemon - </b>Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. </p>



## Microservice for Books
  

| __SNO__ | __ENDPOINT__ | __METHOD__ |__DESCRIPTION__ |__PAYLOAD__ |__RESPONSE__|
|-------------|------------|------------|------------|------------|------------|
| 1         | /book     | POST      | it will create a new book record in the DB     | refer payload for new book creation mentioned below    | "new book created successfully" |
| 2         | /books     | GET      | return list of all books in db     | NA      |return list of all books  in json format     |
| 3         | /book/:id     | GET      | find book based on particular id     | NA      |return json of book with particular id      |
| 4         | /book/:id     | DELETE      | it delete the particular book based on the id     | NA      | "book removed Successfully"      |



#### new book creation payload

   <pre>{
   "title": "angular js from scratch",
    "author": "nik",
    "numberPages": 350,
    "publisher": "nixalar up"
}</pre>


## Microservice for Customers


| __SNO__ | __ENDPOINT__ | __METHOD__ |__DESCRIPTION__ |__PAYLOAD__ |__RESPONSE__|
|-------------|------------|------------|------------|------------|------------|
| 1         | /customer     | POST      | it will create a new customer record in the DB     | refer payload for new customer creation mentioned below    | "new customer created successfully" |
| 2         | /customers     | GET      | return list of all customers in db     | NA      |return list of all customers in json format     |
| 3         | /customer/:id     | GET      | find customer based on particular id     | NA      |return customer with particular id      |
| 4         | /customer/:id     | DELETE      | it delete the particular customer detail based on the id     | NA      | "customer removed Successfully"      |



#### new customer creation payload

   <pre>{
   "name": "karkra",
    "age": 29",
    "address": "U 1b collins st."
}</pre>


## Microservice for Orders


| __SNO__ | __ENDPOINT__ | __METHOD__ |__DESCRIPTION__ |__PAYLOAD__ |__RESPONSE__|
|-------------|------------|------------|------------|------------|------------|
| 1         | /order     | POST      | it will create a new order record in the DB     | refer payload for new order creation mentioned below    | "order created successfully" |
| 2         | /orders     | GET      | return list of all orders in db     | NA      |return list of all orders in json format     |
| 3         | /order/:id    | GET      | find order based on particular order id     | NA      |return customer name  and book title by using the customer and book service internally      |



#### new order creation payload

   <pre>{
        "CustomerID":"5bbb5638f33f54d281d814e8",
        "BookID":"5bbb334378d687a34b3d79f8",
        "initialDate":"2018-09-15",
        "DeliveryDate":"2018-09-29"
    }
</pre>

### How to start microservice
#### To start book service

1) Go to the books folder
2) Run 
    
    npm install

    nodemon books.js

3) It will run the server on http://localhost:3333

#### To start customer service

1) Go to the customers folder
2) Run 
    
    npm install

    nodemon customers.js

3) It will run the server on http://localhost:5555

#### To start orders service

1) Go to the orders folder
2) Run 
    
    npm install

    nodemon orders.js

3) It will run the server on http://localhost:7777

note*** - Use Postman tool to trigger POST endpoints.

#### Thanks
Eduonix course - Learn To Build Microservices Driven Apps
