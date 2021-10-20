// const mysql = require('mysql');
// const connection = mysql.createPool({
//   host: 'localhost',
//   user: 'netuser',
//   password: 'netpass',
//   database: 'library'
// });
// module.exports = connection;

const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const connection = mysql.createConnection(process.env.SQL_SERVER);
module.exports = connection;