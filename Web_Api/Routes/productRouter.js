import Express from "express";
import { path } from "./path.js";
const ProductRouter=Express.Router({strict:true});

ProductRouter.route(path.main+path.product).get(async (req,res)=>{
    res.send({
        data:"Hit Product"
    })
})

export default ProductRouter