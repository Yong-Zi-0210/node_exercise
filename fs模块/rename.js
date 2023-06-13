const fs = require("fs");
// 修改目录名称
fs.rename("./demo", "./images", (err) => {
  console.log(err);
  if (err && err.code === "ENOENT") {
    console.log("不存在该目录");
  }
});
