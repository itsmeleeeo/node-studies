module.exports = (app) => {
    app.get("/add_news", (req, res) => {
        res.render("admin/form_add_news");
    });

    app.post("/news/save", (req, res) => {
        let newsInfo = req.body;
        let conn = app.config.DbConnection();
        let newsModel = new app.app.models.NewsDAO(conn);

        newsModel.saveNews(newsInfo, (err, result) => {
            res.redirect("/news");
        });
    });
}