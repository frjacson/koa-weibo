// 引入koa
import Koa from "koa";
// 引入路由
import { testRouter } from "./routers/index";

// 创建koa实例
const app = new Koa();

// 使用路由
app.use(testRouter.routes());

// 监听端口
app.listen(8081, () => {
  console.log("current server runs at: http://localhost:" + 8081);
});
