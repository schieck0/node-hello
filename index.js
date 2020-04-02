const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')

// const con = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '123456',
//     database: 'hello'
// })

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("DB Connected!");
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Hello World!!!')
    // con.query('select * from names', function (err, result) {
    //     if (err) throw err;
    //     res.json(result)
    // });
})

// app.post('/', function (req, res) {
//     con.query('insert into names(name) values(?)', [req.body.name], function (err, result) {
//         res.send("Inserted id " + result.insertId)
//     });
// })

app.listen(process.env.PORT || 80, () => {
    console.log(`Server listen on ${process.env.PORT || 80}`);
})