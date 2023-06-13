const http = require("http");
const url = require("url");
const https = require("https");

const app = http.createServer();
app.on("request", (req, res) => {
  const { pathname } = url.parse(req.url);
  res.writeHead(200, {
    "Content-Type": "application/josn;charset=utf-8",
    "access-control-allow-origin": "*",
  });
  console.log(pathname);
  switch (pathname) {
    case "/data":
      getData((data) => {
        res.end(data);
      });
      break;
    default:
      res.end("404");
  }
});
app.listen(3000, () => {
  console.log("server start");
});

// 小米有品手机端
function getData(cb) {
  const options = {
    hostname: "m.xiaomiyoupin.com",
    port: "443",
    path: "/mtop/mf/resource/data/batchList",
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  let data = "";
  const request = https.request(options, (res) => {
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      console.log("data:", data);
      cb(data);
    });
  });

  // 如果是application/x-www-form-urlendcode则格式应该是name=xxx&age=100这种格式
  // application/json格式如下
  request.write(JSON.stringify([{}, ["newer_popup_ad", "download_options"]]));
  request.end();
}
