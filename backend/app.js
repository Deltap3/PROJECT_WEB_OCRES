const express = require('express');
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');



var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const app = express();
//Middleware
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Routes -- ici c'est le get -- on peut aussi faire delete, put et post  
app.get('/', (req, res) => {
    res.send('We are on home');
});


//connect to db 
mongoose.connect(
    'mongodb+srv://web:web@cluster0.jje2t.mongodb.net/cluster0?retryWrites=true&w=majority',
    { useNewUrlParser: true },
    () => console.log("Connected to the db"));

//listen to the server
app.listen(3001);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
