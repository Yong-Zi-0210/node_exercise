const fs = require("fs");
// console.log(fs);

// 创建目录
fs.mkdir("./demo", (err) => {
  // 失败时回调
  if (err && err.code === "EEXIST") {
    console.log("已经存在该目录");
  }
});
