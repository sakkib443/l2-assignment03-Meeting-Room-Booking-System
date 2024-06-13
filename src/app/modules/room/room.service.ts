import { TRoom } from './room.interface';
import { Room } from './room.model';

const CreateRoomService = async (payLoad: TRoom) => {
  const result = await Room.create(payLoad);
  return result;
};

const GetAllRoomService = async () => {
  const result = await Room.find();
  return result;
};

const GetSingleRoomService = async (id: string) => {
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    const error = new Error(`Room id is not a valid`);
    throw error;
  }
  const result = await Room.findById(id);
  if (!result) {
    const error = new Error(`Room is not found with ID ${id}`);
    throw error;
  }
  return result;
};


const UpdateRoomService = async (id: string, payLoad: TRoom) => {
  const result = await Room.findByIdAndUpdate(id, payLoad);
  return result;
};

const DeleteRoomService = async (id: string) => {
  const result = await Room.findByIdAndUpdate(id);
  return result;
};

export const RoomService = {
  CreateRoomService,
  GetAllRoomService,
  GetSingleRoomService,
  UpdateRoomService,
  DeleteRoomService,
};
