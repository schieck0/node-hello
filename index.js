const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'remotemysql.com',
    port: 3306,
    user: 'FZxTxHaBIt',
    password: '7Ol1cIIFDQ',
    database: 'FZxTxHaBIt'
})

con.connect(function (err) {
    if (err) throw err;
    console.log("DB Connected!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    con.query('select * from names', function (err, result) {
        if (err) throw err;
        res.json(result)
    });
})

app.post('/', function (req, res) {
    con.query('insert into names(name) values(?)', [req.body.name], function (err, result) {
        if (err) throw err;
        res.send("Inserted id " + result.insertId)
    });
})

app.listen(process.env.PORT || 80, () => {
    console.log(`Server listen on ${process.env.PORT}`);
})