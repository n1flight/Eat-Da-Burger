const mysql = require('mysql');

var PORT = 8080;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  });


  connection.connect(function(err) {
    if (err) throw err
})

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers", function(err, result) {
        if (err) throw err;
        console.log(err)
       
    }) 
})

