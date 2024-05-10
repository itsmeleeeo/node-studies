let http = require("http");

let server = http.createServer((req, res) => {
    let category = req.url;
    
    if(category == '/tech') {
        res.end("<html><body>Tech News</body></html>");
    } else if(category == '/beauty') {
        res.end("<html><body>Beauty Blog</body></html>");
    } else {
        res.end("<html><body>Daily News</body></html>");
    }
});

server.listen(3000);
console.log(`server running on port: 3000`);