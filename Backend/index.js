const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const userBlogs = require('./model/blogs.model');
const userEmail = require('./model/email.model');

mongoose.connect('mongodb://localhost:27017/blogger');

const app = express();
const uploadDir = path.join(__dirname,'uploads')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({encodeURI : true}));
app.use('/uploads',express.static(uploadDir));

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,uploadDir)
    },
    filename : function(req,file,cb){
        cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage : storage
})

app.post('/', upload.single('file'), (req,res)=> {
    const {title,description,category,authorImg}= req.body;
    const newModel = ({
        image : req.file.filename,
        title : title,
        description : description,
        category : category,
        authorImg : authorImg
    }) 
    userBlogs.create(newModel)
    .then((response)=> {
        res.json(response);
        console.log(response);
    })
    .catch((error)=> res.json(error))
})

app.get("/show", function(req,res) {
    userBlogs.find({})
    .then((response)=> {res.json(response)})
    .catch((error)=> res.json(error))
})

app.delete("/show/delete/:id", function(req,res) {
    const {id} = req.params;
    userBlogs.findByIdAndDelete(id)
    .then((response)=> {res.json(response)})
    .catch((error)=> res.json(error))
})

app.get("/blog/:id", function(req,res) {
    const {id} = req.params;
    userBlogs.findById(id)
    .then((response)=> res.json(response))
    .catch((error) => res.json(error))
})

app.post("/api/email", (req,res)=> {
    const {email} = req.body;
    userEmail.create({email})
    .then((response)=> res.json({success : true, msg : "Email Subscribed" + response}))
    .catch((error)=> res.json(error));
})

app.get("/api/email/get", (req,res)=> {
    userEmail.find()
    .then((response)=> res.json(response))
    .catch((error)=> res.json(error));
})

app.delete("/api/email/delete/:id", (req,res)=> {
    const {id} = req.params;
    userEmail.findByIdAndDelete(id)
    .then((response)=> res.json(response))
    .catch((error)=> res.json(error));
})

app.listen(8080,()=> {
    console.log("server is listening");
})