module.exports = (app) => {
    app.get("/news", (req, res) => {
        let conn = app.config.DbConnection();
        let newsModel = app.app.models.NewsModel;
        
        newsModel.getNews(conn, (err, resp) => {
            res.render("news/news", {news: resp});
        });
    });
}