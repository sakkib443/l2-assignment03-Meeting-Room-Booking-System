import { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';

const BookingSchema = new Schema<TBooking>({
  room: {
    type: Schema.Types.ObjectId,
    required: [true, 'Room number is required'],
    ref: 'Room',
  },
  slots: [
    {
      type: Schema.Types.ObjectId,
      required: [true, 'Slots is required'],
      ref: 'Slot',
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User is required'],
    ref: 'User',
  },
  date: { type: String, required: [true, 'Date is require'] },
  totalAmount: { type: String, required: [true, 'Total Amount is require'] },
  isConfirmed: {
    type: String,
    enum: ['confirmed', 'unconfirmed', 'canceled'],
    default: 'confirmed',
  },
});

export const Booking = model<TBooking>('Booking', BookingSchema);
