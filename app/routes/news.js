var dbConnection = require("../../config/DbConnection");

module.exports = (app) => {
    let conn = dbConnection();
    
    app.get("/news", (req, res) => {
        conn.query('select * from news', (err, resp) => {
        res.render("news/news", {news: resp});
        });
    });
}