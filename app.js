const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Good News");
});

app.get("/tech", (req, res) => {
    res.end("<html><body>Tech News</body></html>");
});

app.get("/beauty", (req, res) => {
    res.end("<html><body>Beauty Blog</body></html>");
});


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
