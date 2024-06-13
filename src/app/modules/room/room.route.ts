import { Router } from "express";
import { RoomController } from "./room.controller";
import validateRequest from "../../middleware/validateRequest";
import { RoomValidation } from "./room.validation";



const router = Router()

router.post('/',validateRequest(RoomValidation.RoomValidationSchema),RoomController.CreateRoomController)
router.get('/',RoomController.GetAllRoomController)
router.get('/:id',RoomController.GetSingleRoomController)
router.delete('/:id',RoomController.deleteSingleRoomController)
router.put('/:id',RoomController.updateSingleRoomController)


export const RoomRoutes = router;