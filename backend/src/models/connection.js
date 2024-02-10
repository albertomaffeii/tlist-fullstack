require('dotenv').config();

const mysql = require('mysql2/promise');


console.log('---------------------------------')
console.log(process.env.MYSQL_HOST);
console.log(process.env.MYSQL_USER);
console.log(process.env.MYSQL_PASSWORD);
console.log(process.env.MYSQL_DB);
console.log('---------------------------------')

const connection = mysql.createPool({
    host: "localhost", //process.env.MYSQL_HOST,
    user: "root", //process.env.MYSQL_USER,
    password: "root", //: process.env.MYSQL_PASSWORD,
    database: "todolist", //process.env.MYSQL_DB,
});

module.exports = connection;

