module.exports = (app) => {

    app.get("/news", (req, res) => {

        let mysql = require('mysql');

        let conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "1234",
            database: "news_portal"
        });

        conn.query('select * from news', (err, resp) => {
            res.send(resp);
            console.log(conn);
        });
    });
}