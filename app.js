const port = 3000;
const app = require("./config/server");
const routeHome = require("./app/routes/home");
const routeNews = require("./app/routes/news");
const routeAddNews = require("./app/routes/add_news");

routeHome(app);
routeNews(app);
routeAddNews(app);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
