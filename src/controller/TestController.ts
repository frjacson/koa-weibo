import { Context, Next } from "koa";
class TestController {
  async getTest(ctx: Context, next: Next) {
    try {
      ctx.body = "hello text";
    } catch (err) {
      ctx.body = "server error";
    }
  }
}

export default new TestController();
