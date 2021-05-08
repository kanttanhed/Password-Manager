const express = require('express');
const app = express();
const mysql = require ('mysql')
const cors = require('cors');
const PORT = 3001;

app.use(cors());
app.use(express.json());

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
       console.log("Connection with Mysql database established.");
    }
});

app.get('/',(req, res) => {
    res.send("Hello Word")
})

// Add Password in DB
app.post("/addpassword", (req, res) => {
    const {password, title } = req.body;

    db.query(
        "INSERT INTO passwords (password, title) VALUES(?,?)",
        [password, title],
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send("Success")
            }
        }
    )
})


app.listen(PORT, () => {
   console.log("Server is running") 
})