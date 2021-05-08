const express = require('express');
const app = express();
const mysql = require ('mysql')
const PORT = 3001;

// Database Connection
const db = mysql.createConnection({
    user: 'plinio',
    host:'localhost',
    password: '12345678',
    database:'PasswordManager'
})

db.connect( (err) =>{

    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
       console.log("Connection established.");
    }
});

app.get('/',(req, res) => {
    res.send("Hello Word")
})


app.listen(PORT, () => {
   console.log("Server is running") 
})