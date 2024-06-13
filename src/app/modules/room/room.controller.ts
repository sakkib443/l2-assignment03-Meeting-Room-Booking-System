import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { RoomService } from './room.service';

const CreateRoomController = catchAsync(async (req, res) => {
  const result = await RoomService.CreateRoomService(req.body);
  res.status(200).json({
    success: true,
    statusCode : httpStatus.OK,
    message: "Room added successfully",
    data: result,
  });
});

const GetAllRoomController = catchAsync(async (req, res) => {
  const result = await RoomService.GetAllRoomService();
  res.status(200).json({
    success: true,
    statusCode : httpStatus.OK,
    message: "Rooms retrieved successfully",
    data: result,
  });
});



const GetSingleRoomController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await RoomService.GetSingleRoomService(id);
  res.status(200).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room retrieved successfully',
    data: result,
  });
});



const updateSingleRoomController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await RoomService.UpdateRoomService(id, req.body);

  res.status(200).json({
    success: true,
    statusCode: res.statusCode,
    message: "Room updated successfully",
    data: result,
  });
});


const deleteSingleRoomController = catchAsync(async(req,res)=>{
    const {id} = req.params;
    const result = await RoomService.DeleteRoomService(id);
    res.status(200).json({
        success: true,
        statusCode: res.statusCode,
        message: 'Room deleted successfully',
        data: result,
    })
})


export const RoomController = {
  CreateRoomController,
  GetAllRoomController,
  GetSingleRoomController,
  updateSingleRoomController,
  deleteSingleRoomController
};
