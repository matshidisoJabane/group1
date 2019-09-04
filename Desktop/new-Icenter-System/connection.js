
const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  
    database: 'icenter',
    multipleStatements: true
   });
   
    mysqlConnection.connect(function(error){
       if(!!error){
           console.log('Error');
       } else{
           console.log('connected');
       }
   });
    
 module.exports = mysqlConnection;  