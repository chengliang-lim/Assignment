import Express from "express";
import UserRouter from "./userRouter.js";
import ProductRouter from "./productRouter.js";
import { path } from "./path.js";

const Router=Express.Router({strict:true})
Router.route(path.main).get(async(req,res)=>{
    //TODO: SHOW SOMETHING WHEN PEOPLE ACCESS THIS API
    res.send("Circus Hwaiting")
})
Router.use(UserRouter);
Router.use(ProductRouter);

export default Router