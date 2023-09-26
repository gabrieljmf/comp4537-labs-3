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
    let greetings =
      "<button><a href='/?name=gabe'>Send Name</a></button><br />";
    if (fullUrl.query.name) {
      greetings = `<button><a href='/?name=gabe'>Send Name</a></button><br /><b style='color:#2b78e4'>
      Hello ${
        fullUrl.query.name
      }, What a beautiful day. Server current date and time is ${serverTime.getTime()}</b>`;
    }
    res.end(greetings);
  })
  .listen(8888);

console.log("server is running and listening ...");
