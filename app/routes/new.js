module.exports = (app) => {
    app.get("/new", (req, res) => {
        let conn = app.config.DbConnection();
        let newsModel = new app.app.models.NewsDAO(conn);
        
        newsModel.getNew((err, resp) => {
            res.render("news/new", {news: resp});
        });
    });
}