const http = require("http");
const app = http.createServer((req, res) => {
  console.log(req.url); // req请求信息，url请求路径
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" }); // 响应头设置，状态吗，内容
  res.write("hhhh");
  res.write(`
  <html>
    <h1>哈哈哈123</h1>
  </html>
  `);
  res.end(); // 必须要有end,不然服务器会一直等待
});

// 另一种写法
// const app = createServer()
// app.on('request', (req, res) => {

// })

// 监听3000端口
app.listen(3000, () => {
  console.log("server start");
});
