const querystring = require("querystring");

const str = "name=张三&age=100";

console.log(querystring.parse(str));
// {name: '张三', age: '100'}

const obj = { name: "张三", age: "100" };

console.log(querystring.stringify(obj));

const code = querystring.escape(str); // 可以转义编码å，防止sql注入
querystring.unescape(code); // 解码
