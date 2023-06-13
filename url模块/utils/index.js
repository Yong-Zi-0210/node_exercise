const { routers } = require("./router");
const Url = require("url"); // 解析请求url
exports.resStatus = function (url) {
  const { pathname, query } = Url.parse(url, true); // true 解析成json
  console.log("请求参数：", query);
  return {
    status: routers.includes(pathname) ? 200 : 404,
    pathname,
  };
};

// url模块的resolve、parse、fromat新版本已经弃用
