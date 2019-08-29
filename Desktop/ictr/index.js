const express = require("express");
//const mysql = require("mysql");
const bodyparser = require('body-parser');
const AdminRoutes = require("./routes/admin");
const UserRoutes = require("./routes/user_details");
const ComplainRoutes = require("./routes/complain");
const ComplimentRoutes = require("./routes/compliment");
const FeedbackRoutes = require("./routes/feedback");
const SuggestionRoutes = require("./routes/suggestion");
const mysqlConnection = require("./connection");

var app = express();
app.use(bodyparser.json());

app.use("/admin", AdminRoutes);
app.use("/user_details", UserRoutes);
app.use("/complain", ComplainRoutes);
app.use("/compliment", ComplimentRoutes);
app.use("/feedback", FeedbackRoutes);
app.use("/suggestion", SuggestionRoutes);

app.listen(4000);