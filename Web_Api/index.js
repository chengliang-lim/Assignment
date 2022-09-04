import Express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"
import Router from "./Routes/router.js"

dotenv.config({ path: '.env' });

const app = Express();
app.use(Express.json());
app.use(cookieParser())
app.use(helmet());
app.use(cors());
app.use(Router)


app.listen(process.env.PROD_PORT, () => {
    console.log(`your application is running on port ${process.env.PROD_PORT}`);
});

