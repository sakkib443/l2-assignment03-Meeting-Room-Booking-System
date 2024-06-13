import { z } from 'zod';

const userSchemaValidation = z.object({
  body: z.object({
    email: z
      .string({
        invalid_type_error: 'email must be string',
        required_error: 'email is required',
      })
      .email(),
    password: z
      .string({
        invalid_type_error: 'Password must be string',
        required_error: 'Password is required',
      })
      .min(4, { message: 'Password must be more than 4 character' })
      .max(20, { message: 'Password must be less that 20 characters' }),
  }),
});

export const userValidation = {
  userSchemaValidation,
};
