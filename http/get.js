// 使用http模块作为中间件，做请求转发
const http = require("http");
const url = require("url");
const https = require("https");

const app = http.createServer();
app.on("request", (req, response) => {
  const { pathname } = url.parse(req.url, true);
  console.log(pathname);
  response.writeHead(200, {
    "Content-Type": "application/json;charset=utf-8",
    "access-control-allow-origin": "*",
  });
  switch (pathname) {
    case "/data": // 前端请求的地址 http://localhost:3000/data
      getData().then((res) => {
        response.end(res);
      });
      break;
    case "/favicon.ico":
      return;
    default:
      response.end("404");
  }
});
app.listen(3000, () => {
  console.log("server start");
});

// 获取猫眼电影的数据
function getData() {
  return new Promise((resolve, reject) => {
    let data = "";
    https.get(
      "https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E6%B7%B1%E5%9C%B3&ci=30&channelId=4",
      (res) => {
        // 数据流接收数据
        res.on("data", (chuck) => {
          data += chuck;
        });
        // 数据接收完毕
        res.on("end", () => {
          resolve(data);
        });
      }
    );
  });
}
