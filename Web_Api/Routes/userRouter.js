import Express from "express";
import { Path } from "./path.js";
const UserRouter=Express.Router({strict:true});

UserRouter.route(Path.main+Path.user).get(async (req,res)=>{
    res.send({
        data:"Hit User"
    })
})

export default UserRouter