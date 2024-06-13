import { Schema, model } from 'mongoose';
import { TSlot } from './slot.interface';
import { Room } from '../room/room.model';

const SlotSchema = new Schema<TSlot>({
  room: {
    type: Schema.Types.ObjectId,
    required: [true, 'Room number is required'],
    ref: 'Room',
  },
  date: { type: String, required: [true, 'Date is require'] },
  startTime: { type: String, required: [true, 'Start Time is require'] },
  endTime: { type: String, required: [true, 'End Time is require'] },
  isBooked: { type: Boolean, default: false },
});

// Chalking room availability
SlotSchema.pre('save', async function (next) {
  const isRoomExist = await Room.findOne({
    room: this.room,
  });
  if (!isRoomExist) {
    throw new Error('Room not found');
  }
  next();
});

// Chalking Slot availability
SlotSchema.pre('save', async function (next) {
  const isSlotExist = await Slot.findOne({
    date: this.date,
    startTime: this.startTime,
    endTime: this.endTime,
    room: this.room,
  });
  if (isSlotExist) {
    throw new Error('Slot already exists');
  }
  next();
});

export const Slot = model<TSlot>('Slot', SlotSchema);
