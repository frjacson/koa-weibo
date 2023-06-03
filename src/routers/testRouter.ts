import KoaRouter from "koa-router";
import TestController from "../controller/TestController";
const testRouter = new KoaRouter();

testRouter.get("/test", TestController.getTest);

export default testRouter;
