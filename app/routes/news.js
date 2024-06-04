module.exports = (app) => {
    app.get("/news", (req, res) => {
        app.app.controller.news.news(app, req, res);
    });

    app.get("/new", (req, res) => {
        app.app.controller.news.new(app, req, res);
    });
}