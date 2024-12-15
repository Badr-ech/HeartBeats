import { Router } from "express";
import { getMedicines } from "../Controllers/MedicinesController.js";
const medicinesRouter = Router();

medicinesRouter.get('/', getMedicines);

export default medicinesRouter;
