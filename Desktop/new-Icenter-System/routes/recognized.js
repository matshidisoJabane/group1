const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");


Router.get("/recognized/GetAll", (req, res)=>{
    mysqlConnection.query("SELECT * from recognized", (err, rows,fields)=>{
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

Router.get("/recognized/(:id)", (req, res)=>{
    var user = { id: req.params.id }

    mysqlConnection.query("SELECT * from recognized WHERE rec_id = " + req.params.id, user, (err, rows,fields)=>{
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
        let post={rec_id:req.body.rec_id,rec_name:req.body.rec_name,rec_surname:req.body.rec_surname,rec_email:req.body.rec_email,contact:req.body.contact,message:req.body.message,cate_id:req.body.cate_id}
            if(!post){
                return res.status(400).send({error:true,message: 'please insert recgnise'});
            }
            mysqlConnection.query("INSERT INTO recognized SET ?" ,[post],function(error,results,fields){
                if(error) throw error;
            });

            res.end();
    });

    module.exports = Router;