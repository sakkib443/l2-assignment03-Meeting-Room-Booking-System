import { Schema, model } from 'mongoose';
import { TRoom } from './room.interface';

const roomSchema = new Schema<TRoom>({
  name: { type: 'String', required: [true, 'Room name is required'] },
  roomNo: { type: 'Number', required: [true, 'Room number is required'] },
  floorNo: { type: 'Number', required: [true, 'Floor number is required'] },
  capacity: { type: 'Number', required: [true, 'Capacity is required'] },
  pricePerSlot: { type: 'Number', required: [true, 'Capacity is required'] },
  amenities: { type: [String], required: [true, 'amenities is required'] },
  isDeleted: { type: 'Boolean', default: false },
});

// Chalking Room Available or Not Available
roomSchema.pre('save', async function (next) {
  const isRoomExist = await Room.findOne({
    roomNo: this.roomNo,
    floorNo: this.floorNo,
  });
  if (isRoomExist) {
    throw new Error('Room already exists');
  }
  next();
});

// Chalking Room Available or Not Available
roomSchema.pre('findOneAndUpdate', async function (next) {
  const id = this.getQuery();
  const room = await Room.findById(id);
  if (!room || room.isDeleted) {
    throw new Error(`Room is not available`);
  }
  next();
});



export const Room = model<TRoom>('Room', roomSchema);
