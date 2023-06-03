import Router from "koa-router";
import TestController from "../controller/TestController";
const testRouter = new Router();

testRouter.get("/test", TestController.getTest);

export default testRouter;
