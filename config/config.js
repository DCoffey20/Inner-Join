require('dotenv').config();
module.exports = {
"development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_KEY,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
},
"test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
},
"production": {
    "username": "z8510a79gw1p6qe3",
    "password": "txtpcfgqpoths207",
    "database": "v319rdteak9b87qc",
    "host": "kavfu5f7pido12mr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
    "operatorsAliases": false,
  }
};