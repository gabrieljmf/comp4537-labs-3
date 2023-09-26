const http = require("http");
const math = require("./modules/math");
const url = require("url");
const serverTime = require("./modules/time");

http
  .createServer(function (req, res) {
    let name = "";
    const fullUrl = url.parse(req.url, true);
    if (fullUrl.query.name != undefined) {
      name = fullUrl.query.name;
    } else {
      name = "Gabriel";
    }

    const data = `Welcome <b>${name}</b><br />`;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);

    res.end(
      `<button ><a href='/?name=gabe'>Send Name</a></button><br />${serverTime.getTime()}`
    );
  })
  .listen(8888);

console.log("server is running and listening ...");
