import { Context } from "koa";

type UserInfo = {
  userName: string;
  password: string;
};
class UserController {
  async getUserByName(ctx: Context) {
    const { userName } = ctx.params;
    ctx.body = {
      title: "this is profile page",
      userName,
    };
  }

  async loadMoreUser(ctx: Context) {
    const { userName, pageIndex } = ctx.params;
    ctx.body = {
      title: "this is loadMore api",
      userName,
      pageIndex,
    };
  }

  async login(ctx: Context) {
    const { userName, password } = ctx.request.body as UserInfo;
    ctx.body = {
      userName,
      password,
    };
  }
}

export default new UserController();
