const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");


Router.get("/", (req, res)=>{
    mysqlConnection.query("SELECT * from category", (err, rows,fields)=>{
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




Router.post('/recognized',function(req,res){
        let post={rec_id:req.body.rec_id,rec_name:req.body.rec_name,rec_surname:req.body.rec_surname,rec_email:req.body.rec_email,cat_id:req.body.cat_id}
            if(!post){
                return res.status(400).send({error:true,message: 'please insert category'});
            }
            mysqlConnection.query("INSERT INTO recognized SET ?" ,[post],function(error,results,fields){
                if(error) throw error;
            });

            res.end();
    });

    module.exports = Router;