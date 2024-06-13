import { z } from 'zod';

const BookingValidationSchema = z.object({
  body: z.object({
    room: z.string({
      invalid_type_error: 'Room must be string',
      required_error: 'Room is required',
    }),
    slots: z.string({
        invalid_type_error: 'Slot must be string',
        required_error: 'Slot is required',
      }),
      user: z.string({
        invalid_type_error: 'User must be string',
        required_error: 'User is required',
      }),

    date: z.string({
      invalid_type_error: 'Date must be string',
      required_error: 'Date is required',
    }),

  }),
});

export const BookingValidation = {
  BookingValidationSchema,
};
