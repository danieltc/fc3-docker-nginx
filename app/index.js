const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

global.html = "-";

app.get('/', (req,res) => {
    const config = {
        host: 'db',
        user: 'root',
        password: 'root',
        database:'nodedb'
    };
    const mysql = require('mysql')
    const connection = mysql.createConnection(config)
    const insert = `INSERT INTO people (name) values ('FULANO DE TAL')`
    connection.query(insert)
    const sql = `SELECT * FROM people`

    connection.query(sql, (err, result, fields) => {
        html =  result
        console.log(html)
    })
    connection.end()
    if(html=="-")
        res.send('<h1>LISTINHA VAZIA</h1>')
    else 
        res.send('<h1>LISTINHA</h1> - '+html?.map(i=>" "+i.name))

})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})