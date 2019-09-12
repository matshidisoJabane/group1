const express = require("express");
//const mysql = require("mysql");
const bodyparser = require('body-parser');
const AdminRoutes = require("./routes/admin");
const categoryRoutes = require("./routes/category");
const AnonymousRoutes = require("./routes/anonymous");
const RecognizedRoutes = require("./routes/recognized");
const LoginRoutes = require("./routes/login");
const mysqlConnection = require("./connection");

var app = express();
app.use(bodyparser.json());


app.use("/admin", AdminRoutes);
app.use("/category", categoryRoutes);
app.use("/anonymous", AnonymousRoutes);
app.use("/recognized/GetAll", RecognizedRoutes);
app.use("/login", LoginRoutes);


app.use('/',require('./routes/category'));
app.use('/', require('./routes/recognized'));
app.use('/', require('./routes/anonymous'));
app.use('/', require('./routes/login'));


app.listen(1313);