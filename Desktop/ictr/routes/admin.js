const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/", (req, res)=>{
    mysqlConnection.query("SELECT * from admin", (err, rows,fields)=>{
        if(!err)
        {
            res.send(rows);
            console.log('Sucess!\n');
            console.log(rows);
        }
        else
        {
            console.log(err);
        }
    })
})
/*
Router.delete("/admin", (req, res)=>{
    mysqlConnection.query('DELETE FROM admin WHERE admin_id = ?',[req.params.id],(error, rows, fields)=>{

      if(!err){
       res.send('deleted successful');
      }
      else{
       console.log(err); 
      }
    })
})*/

module.exports = Router;