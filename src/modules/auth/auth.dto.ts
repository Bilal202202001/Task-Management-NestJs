import { Types } from 'mongoose';

export class LoginDto {
  email: string;
  password: string;
}

export class RegisterDto {
  name: string;
  email: string;
  password: string;
}
