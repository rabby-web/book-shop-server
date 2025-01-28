/* eslint-disable no-unused-vars */
import { Document } from 'mongoose';
import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';
import { Types } from 'mongoose';

export interface IUser extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role?: 'admin' | 'user';
  status?: 'active' | 'block';
}

export interface UserModel extends Model<IUser> {
  isUserExists(email: string): Promise<IUser>;
  isPasswordMatch(
    plainTextPassword: string,
    hashPassword: string,
  ): Promise<boolean>;
}

export type IUserRole = keyof typeof USER_ROLE;

export type ILoginUser = {
  email: string;
  password: string;
};
