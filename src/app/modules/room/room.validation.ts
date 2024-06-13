import { z } from 'zod';

const RoomValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be string',
      required_error: 'Room is required',
    }),
    roomNo: z.number({
      invalid_type_error: 'Room No must be number',
      required_error: 'Room No is required',
    }),
    floorNo: z.number({
      invalid_type_error: 'Floor No must be number',
      required_error: 'Floor No is required',
    }),
    capacity: z.number({
      invalid_type_error: 'Capacity must be number',
      required_error: 'Capacity is required',
    }),
    pricePerSlot: z.number({
      invalid_type_error: 'Price Per Slot must be number',
      required_error: 'Price Per Slot is required',
    }),
    amenities: z.array(z.string()).min(1, {
      message: 'At least one amenity is required',
    }),
  }),
});

export const RoomValidation = {
  RoomValidationSchema,
};
