const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");


Router.get("/", (req, res)=>{
    mysqlConnection.query("SELECT * from anonymous", (err, rows,fields)=>{
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

Router.post('/anonymous',function(req,res){
        let post={category_id:req.body.category_id,message:req.body.message}
            if(!post){
                return res.status(400).send({error:true,message: 'please insert category'});
            }
            mysqlConnection.query("INSERT INTO anonymous SET ?" ,[post],function(error,results,fields){
                if(error) throw error;
            });

            res.end();
    });

    module.exports = Router;