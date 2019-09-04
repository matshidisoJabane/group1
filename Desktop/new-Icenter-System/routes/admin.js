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

// DELETE USER
Router.delete('/(:id)', (req, res) =>{
    var user = { id: req.params.id }
    
    //req.getConnection(function(error, conn) {
        mysqlConnection.query('DELETE FROM admin WHERE cat_id = ' + req.params.id, user, function(err, result) {
            //if(err) throw err
            if (err) {
              console.log(err); 

            } else {
            
                res.send('deleted successful');
            }
        })
    })

 
module.exports = Router;