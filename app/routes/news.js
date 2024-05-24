module.exports = (app) => {
    app.get("/news", (req, res) => {
        let conn = app.config.DbConnection();
        let newsModel = new app.app.models.NewsDAO(conn);
        
        newsModel.getNews((err, resp) => {
            res.render("news/news", {news: resp});
        });
    });
}