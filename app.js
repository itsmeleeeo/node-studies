const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home/index");
})

app.get("/add_news", (req, res) => {
    res.render("admin/form_add_news");
});

app.get("/news", (req, res) => {
    res.render("news/news");
})


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
