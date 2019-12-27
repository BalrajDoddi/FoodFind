const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");

var app = express();

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "users"
});

mysqlConnection.connect(err => {
  if (!err) console.log("BD Connection Succeded...");
  else
    console.log(
      "BD connection failed \n Error : " + JSON.stringify(err, undefined, 2)
    );
});

app.get('/', (req, res) =>{
	res.send("Hello world");
});

app.listen(3000, (err) =>{
	if(!err)
		console.log("Listening on port 3000...");
	else
		console.log("Error in starting the server\n Error :" + JSON.stringify(err, undefined, 2));
});