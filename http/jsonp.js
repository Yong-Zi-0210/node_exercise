const http = require("http");
const url = require("url");
const querystring = require("querystring");
const app = http.createServer();

app.on("request", (req, res) => {
  const { query } = url.parse(req.url, true);
  console.log(query.cb);
  res.end(`${query.cb}(${JSON.stringify({ name: "张三" })})`);
});

app.listen(3000, () => {
  console.log("server start");
});
