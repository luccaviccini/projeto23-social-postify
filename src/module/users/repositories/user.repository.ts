import { User } from '@prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';

export abstract class UserRepository {
  abstract createUser(data: CreateUserDto): Promise<User>;
  abstract findUserByEmail(email: string): Promise<User | null>;
  abstract findUserById(id: number): Promise<User | null>;
}