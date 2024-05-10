module.exports = (app) => {
    app.get("/add_news", (req, res) => {
        res.render("admin/form_add_news");
    });
}