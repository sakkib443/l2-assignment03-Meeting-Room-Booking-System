import { z } from 'zod';

const SlotValidationSchema = z.object({
  body: z.object({
    room: z.string({
      invalid_type_error: 'Room must be string',
      required_error: 'Room is required',
    }),
    date: z.string({
      invalid_type_error: 'Date must be string',
      required_error: 'Date is required',
    }),
    startTime: z.string({
      invalid_type_error: 'Start time  must be string',
      required_error: 'Start time is required',
    }),
    endTime: z.string({
      invalid_type_error: 'End Time must be string',
      required_error: 'End time is required',
    }),
  }),
});

export const SlotValidation = {
  SlotValidationSchema,
};
