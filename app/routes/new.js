module.exports = (app) => {
    app.get("/new", (req, res) => {
        let conn = app.config.DbConnection();
        conn.query("select * from news where id=2", (err, resp) => {
            res.render("news/new", {news: resp});
        });
    });
}