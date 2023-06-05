import Router from "koa-router";
import UserController from "../controller/UserController";
const UserRouter = new Router();

UserRouter.get("/profile/:userName", UserController.getUserByName);
UserRouter.get("/loadMore/:userName/:pageIndex", UserController.loadMoreUser);
UserRouter.post("/login", UserController.login);

export default UserRouter;
