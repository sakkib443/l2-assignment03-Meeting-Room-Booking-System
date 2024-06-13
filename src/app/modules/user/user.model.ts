import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>({
  name: { type: 'String', required: [true, 'Name is required'] },
  email: { type: 'String', required: [true, 'Email is required'] },
  password: { type: 'String', required: [true, 'Password is required'] },
  phone: { type: 'String', required: [true, 'Phone is required'] },
  address: { type: 'String', required: [true, 'Address is required'] },
  role: { type: 'String', enum: ['user', 'admin'] },
});


userSchema.pre('save', async function (next) {
  const isUserExist = await User.findOne({
    email: this.email,
  });
  if (isUserExist) {
    throw new Error('User already exists!');
  }
  next();
});

export const User = model<TUser>('User', userSchema);
