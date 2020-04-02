const path = require("path");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const passportJWT = require("./middlewares/passportJWT")();
const errorHandeler = require("./middlewares/errorHandler");
const memberRoutes = require("./routes/member");
const authRoutes = require("./routes/auth");
const resourceRoutes = require("./routes/resources");

const app = express();

app.use(cors());


mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/companyApp', 
{ useUnifiedTopology: true, 
useNewUrlParser: true},
 console.log("connection to database established"));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(passportJWT.initialize());

app.use("/api/auth", authRoutes);
app.use("/api/member",
// passportJWT.authenticate(),
 memberRoutes);
 app.use("/api/resource", resourceRoutes);


app.use(errorHandeler);

app.listen(5000, () =>{
    console.log("Listening!");
    
});