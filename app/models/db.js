const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
/*
if(connection){ // mysql is started && connected successfully.
  console.log('Connection Success');
}else{
  console.log('Cant connect to db, Check ur db connection');
}*/


module.exports = connection;
