module.exports = (app) => {
    app.get("/news", (req, res) => {
        let conn = app.config.DbConnection();
        conn.query('select * from news', (err, resp) => {
        res.render("news/news", {news: resp});
        });
    });
}