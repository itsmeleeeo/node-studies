module.exports.form_add_news = (app, req, res) => {
    res.render("admin/form_add_news", {validate: {}, news: {}});
}

module.exports.news_save = (app, req, res) => {
    let newsInfo = req.body;

    req.assert("title","The Title cannot be empty!").notEmpty();
    req.assert("summary", "Summary cannot be empty!").len(10, 100);
    req.assert("author", "Author's name must be filled").notEmpty();
    req.assert("news_date", "The date cannot be blank").notEmpty();
    req.assert("news", "News cannot be empty").notEmpty();

    let err = req.validationErrors();

    if(err) {
        res.render("admin/form_add_news", {validate: err, newsInfo: newsInfo});
        return; 
    }

    let conn = app.config.DbConnection();
    let newsModel = new app.app.models.NewsDAO(conn);

    newsModel.saveNews(newsInfo, (err, result) => {
        res.redirect("/news");
    });
}