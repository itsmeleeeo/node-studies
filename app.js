const port = 3000;
const app = require("./config/server");

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
