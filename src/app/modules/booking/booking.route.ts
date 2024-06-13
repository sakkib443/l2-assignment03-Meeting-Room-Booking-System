import { Router } from 'express';
import { BookingController } from './booking.controller';
import validateRequest from '../../middleware/validateRequest';
import { BookingValidation } from './booking.validation';

const router = Router();

router.post(
  '/',
  validateRequest(BookingValidation.BookingValidationSchema),
  BookingController.CreateBookingController,
);
router.get('/', BookingController.GetAllBookingController);
router.get('/:id', BookingController.GetSingleBookingController);
router.put('/:id', BookingController.UpdateBookingController);
router.delete('/:id', BookingController.DeleteBookingController);

export const BookingRoutes = router;
