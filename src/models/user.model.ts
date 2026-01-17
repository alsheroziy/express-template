import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '@/interfaces/user.interface';

export interface IUserDocument extends IUser, Document {}

const UserSchema = new Schema<IUserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

export const User = mongoose.model<IUserDocument>('User', UserSchema);
