const http = require("http");
fs = require('fs');
url = require('url');

var html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>gallery</title>
    <link rel= "stylesheet" href="app.css">
    <script src="app.js"> </script>
</head>
<body>
  <h1> Наша галерея </h1>
    <img src="https://images4.alphacoders.com/289/289496.jpg" alt="first">
    <img src="2.jpg" alt="first">
    <img src="3.jpg" alt="first">
    <img src="4.jpg" alt="first">
    <img src="2.jpg" alt="first">
    <img src="3.jpg" alt="first">
    <img src="4.jpg" alt="first">
</body>
</html>`;



var css = ` h1{
    color: green;
    size: 40px;
    
}
img{
    width: 400px;
}
`;

var js = ` 
// console.log("hello");
`
var jpg  = fs.readFileSync('2.jpg');
var jpg1 = fs.readFileSync('3.jpg');
var jpg2 = fs.readFileSync('4.jpg');


http.createServer((req, res) => {
    var request = url.parse(req.url, true);
    var action = request.pathname;



    switch (req.url) {
        case "/":
            res.writeHead(200, { 'Content-Type': "text/html" });
            res.end(html);
        // break;
        case '/app.css':
            res.writeHead(200, { 'Content-Type': "text/css" });
            res.end(css);
        // break;
        case '/app.js':
            res.writeHead(200, { 'Content-Type': "text/js" });
            res.end(js);
        

        case '/2.jpg':
        res.writeHead(200, { 'Content-Type': "text/jpeg" });
        res.end(jpg);

        case '/3.jpg':
        res.writeHead(200, { 'Content-Type': "text/jpeg" });
        res.end(jpg1);

        case '/4.jpg':
        res.writeHead(200, { 'Content-Type': "text/jpeg" });
        res.end(jpg2);

        default:
            res.writeHead(404, { 'Content-Type': "text/plain" });
            res.end(`404 not`);
    }

}).listen(5000, () => console.log("server work")); 