import { Router } from "express";
import { getStaffController } from "../Controllers/StaffController.js";
const staffRouter = Router();

staffRouter.get('/',getStaffController );


export default staffRouter;
