const http = require("http");
const { resStatus } = require("./utils/index");
const app = http.createServer();
console.log(resStatus);
app.on("request", (req, res) => {
  const { status, pathname } = resStatus(req.url);
  res.writeHead(status, {
    "Content-Type": "text/html;charset=utf-8",
  });
  switch (pathname) {
    case "/home":
      res.write("home");
      break;
    case "/login":
      res.write("login");
      break;
    case "/userInfo":
      res.write(`{
            userName: '张三',
            phone: 123456
        }`);
      break;
    default:
      res.write("no found");
      break;
  }
  res.end();
});

app.listen(3000, () => {
  console.log("server start");
});
