import express from 'express';
import { login } from '../Controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/', login);

export default authRouter;
