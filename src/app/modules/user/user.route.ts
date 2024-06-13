import { Router } from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { userValidation } from "./user.validation";

const router = Router();

router.post('/signup',validateRequest(userValidation.userSchemaValidation),UserController.CreateUserController)
// router.post('/login',UserController.CreateUserController)



export const userRoute = router