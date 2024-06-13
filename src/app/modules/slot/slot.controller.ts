import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { SlotService } from './slot.service';

const CreateSlotController = catchAsync(async (req, res) => {
  const result = await SlotService.CreateSlotService(req.body);
  res.status(200).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Slots created successfully",
    data: result,
  });
});


const GetAvailableSlotController = catchAsync(async (req, res) => {
  const result = await SlotService.GetAvailableSlotService();
  res.status(200).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Available slots retrieved successfully",
    data: result,
  });
});

export const SlotController = {
    CreateSlotController,
    GetAvailableSlotController,
}