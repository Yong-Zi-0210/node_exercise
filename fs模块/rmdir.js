// 删除目录
const fs = require("fs");

fs.rmdir("./images", (err) => {
  console.log(err);
});
