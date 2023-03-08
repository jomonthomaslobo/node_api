
 const express = require("express");
 const cors    = require("cors");


 var app       = express();
 const path    = require('path');
 app.use(express.static(path.join(__dirname,'/build')));
 app.get('/*',function(req,res){
   res.sendFile(path.join(__dirname,'/build/index.html'));
 });
 var corsOptions ={
    origin :"http://localhost:8081"
 };
 const db = require("./models");
 db.mongoose.connect('mongodb+srv://jomonlobo:password123password@cluster0.v13n7tw.mongodb.net/?retryWrites=true&w=majority',{
   useNewUrlParser: true,
   useUnifiedTopology: true
 })
 .then(()=>{
   console.log("DB Connected");
 })
 .catch(err=>{
   console.log("db gone ",err);
   process.exit();
 });


 app.use(cors(corsOptions));

 app.use(express.json());

 app.use(express.urlencoded({ extended: true }));

 app.get("/api/",(req,res)=>{
    res.json({"message":"Movie API for ICT "});
 });

 app.get("/api/all",(req,res)=>{
  const title = req.query.movie_name;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Movie.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Movies."
      });
    });
});
 app.listen(8081,()=>{
   console.log("Server Started");
 });
 
