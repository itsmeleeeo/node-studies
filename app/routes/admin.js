module.exports = (app) => {
    app.get("/add_news", (req, res) => {
        res.render("admin/form_add_news");
    });

    app.post("/news/save", (req, res) => {
        let newsInfo = req.body;
        let conn = app.config.DbConnection();
        let newsModel = app.app.models.NewsModel;

        newsModel.saveNews(newsInfo, conn, (err, result) => {
            console.log(err);
            console.log(result);
            res.redirect("/news");
        });
    });
}