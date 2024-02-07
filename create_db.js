var mysql = require('mysql2');

var con = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "a1b2c3d4"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE database_development", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});