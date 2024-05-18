module.exports = (app) => {
    app.get("/new", (req, res) => {
        let conn = app.config.DbConnection();
        let newsModel = app.app.models.NewsModel;
        
        newsModel.getNew(conn, (err, resp) => {
            res.render("news/new", {news: resp});
        });
    });
}