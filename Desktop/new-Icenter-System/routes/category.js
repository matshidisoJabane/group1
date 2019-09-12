const express = require("express");
const router = express.Router();
const mysqlConnection = require("../connection");


router.get("/", (req, res)=>{
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

// DELETE USER
router.delete('/(:id)', (req, res) =>{
    var user = { id: req.params.id }
    
    //req.getConnection(function(error, conn) {
        mysqlConnection.query('DELETE FROM category WHERE id = ' + req.params.id, user, function(err, result) {
            //if(err) throw err
            if (err) {
              console.log(err); 

            } else {
            
                res.send('deleted successful');
            }
        })
    })

   
    router.post('/category',function(req,res){
        let user={id:req.body.id,name:req.body.name}
            if(!user){
                return res.status(400).send({error:true,message: 'please insert category id'});
            }
            mysqlConnection.query("INSERT INTO category SET ?" ,[user],function(error,results,fields){
                if(error) throw error;
            });

            res.end();
    });


    router.put('/category',function(req,res){
        let user={id:req.body.id,name:req.body.name}
            if(!user){
                return res.status(400).send({error:true,message: 'please insert category'});
            }
            mysqlConnection.query("UPDATE category SET ?" ,[user],function(error,results,fields){
                if(error) throw error;
            });

            res.end();
    });

module.exports = router;