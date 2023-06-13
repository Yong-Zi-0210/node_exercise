const Event = require("events");

// 原理： 发布订阅模式
const events = new Event();

events.on("click", () => {
  console.log("click");
});

events.emit("click");
