

const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  
    database: 'icenter'
   });
   
    mysqlConnection.connect(function(error){
       if(!!error){
           console.log('Error');
       } else{
           console.log('connected');
       }
   });
    
 module.exports = mysqlConnection;  