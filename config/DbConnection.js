var mysql = require('mysql');

const conn = () => {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "news_portal"
    });
}

module.exports = () => {
    return conn;
}