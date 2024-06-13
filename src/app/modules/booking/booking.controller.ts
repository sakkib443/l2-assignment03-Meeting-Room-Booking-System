import catchAsync from '../../utils/catchAsync';
import { BookingServices } from './booking.service';

const CreateBookingController = catchAsync(async (req, res) => {
  const result = await BookingServices.CreateBookingService(req.body);
  res.status(200).json({
    success: true,
    message: 'Booking created successfully',
    data: result,
  });
});

const GetAllBookingController = catchAsync(async(req,res)=>{
    const result = await BookingServices.getAllBookings();
    res.status(200).json({
        success: true,
        statusCode: res.statusCode,
        message: 'Booking created successfully',
        data: result,
    });
})

const GetSingleBookingController = catchAsync(async(req,res)=>{
    const {id} = req.params;
    const result = await BookingServices.getSingleBooking(id);
    res.status(200).json({
        success: true,
        statusCode: res.statusCode,
        message: 'Booking created successfully',
        data: result,
    });
})

const UpdateBookingController = catchAsync(async(req,res)=>{
    const {id} = req.params;
    const result = await BookingServices.updateBooking(id,req.body);
    res.status(200).json({
        success: true,
        statusCode: res.statusCode,
        message: 'Booking created successfully',
        data: result,
    });
})

const DeleteBookingController = catchAsync(async(req,res)=>{
    const {id} = req.params;
    const result = await BookingServices.deleteBooking(id);
    res.status(200).json({
        success: true,
        statusCode: res.statusCode,
        message: 'Booking created successfully',
        data: result,
    });
})





export const BookingController = {
  CreateBookingController,
  GetAllBookingController,
  GetSingleBookingController,
  UpdateBookingController,
  DeleteBookingController,
};
