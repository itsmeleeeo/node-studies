module.exports.news = (app, req, res) => {
    let conn = app.config.DbConnection();
    let newsModel = new app.app.models.NewsDAO(conn);
    
    newsModel.getNews((err, resp) => {
        res.render("news/news", {news: resp});
    });
}

module.exports.new = (app, req, res) => {
    let conn = app.config.DbConnection();
    let newsModel = new app.app.models.NewsDAO(conn);
    
    newsModel.getNew((err, resp) => {
        res.render("news/new", {news: resp});
    });
}