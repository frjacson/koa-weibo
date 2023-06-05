// 引入koa
import Koa from "koa";
import bodyparser from "koa-bodyparser";
// 引入路由
import useRoutes from "./routers/index";
// 静态资源

// 创建koa实例
const app = new Koa();

app.use(bodyparser());

// 使用路由
useRoutes(app);

// 监听端口
app.listen(8081, () => {
  console.log("current server runs at: http://localhost:" + 8081);
});
