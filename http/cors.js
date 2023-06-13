const http = require("http");
const app = http.createServer();

app.on("request", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json;charset=utf-8",
    "access-control-allow-origin": "*", // 允许所有域名访问
  });
  res.end(
    JSON.stringify({
      name: "张三",
      age: 100,
    })
  );
});

app.listen(3000, () => {
  console.log("server start");
});
