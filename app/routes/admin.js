const { format } = require("mysql");
const news = require("./news");

module.exports = (app) => {
    app.get("/add_news", (req, res) => {
        app.app.controller.admin.form_add_news(app, req, res);
    });

    app.post("/news/save", (req, res) => {
        app.app.controller.admin.news_save(app, req, res);
    });
}