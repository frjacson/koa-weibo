// 引入koa
import Koa from "koa";

// 创建koa实例
const app = new Koa();

// 监听端口
app.listen(8081, () => {
  console.log("current server runs at: http://localhost:" + 8081);
});

module.exports = app;
