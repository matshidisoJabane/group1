const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");


Router.get("/", (req, res)=>{
    mysqlConnection.query("SELECT * from message", (err, rows,fields)=>{
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
        mysqlConnection.query('DELETE FROM message WHERE cat_id = ' + req.params.id, user, function(err, result) {
            //if(err) throw err
            if (err) {
              console.log(err); 

            } else {
            
                res.send('deleted successful');
            }
        })
    })

   
    Router.post('/message',function(req,res){
        let post={cat_id:req.body.cat_id,message:req.body.message}
            if(!user){
                return res.status(400).send({error:true,message: 'please insert category'});
            }
            mysqlConnection.query("INSERT INTO recognized SET ?" ,[post],function(error,results,fields){
                if(error) throw error;
            });

            res.end();
    });


    Router.put('/message',function(req,res){
        let post={cat_id:req.body.cat_id,message:req.body.message}
        if(!user){
            return res.status(400).send({error:true,message: 'please insert category'});
        }
        mysqlConnection.query("INSERT INTO recognized SET ?" ,[post],function(error,results,fields){
            if(error) throw error;
        });

        res.end();
});


module.exports = Router;