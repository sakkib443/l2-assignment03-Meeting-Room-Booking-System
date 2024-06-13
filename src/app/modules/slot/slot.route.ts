import { Router } from 'express';
import { SlotController } from './slot.controller';
import validateRequest from '../../middleware/validateRequest';
import { SlotValidation } from './slot.validation';

const router = Router();

router.post(
  '/',
  validateRequest(SlotValidation.SlotValidationSchema),
  SlotController.CreateSlotController,
);
router.get('/availability', SlotController.GetAvailableSlotController);

export const SlotRoutes = router;
