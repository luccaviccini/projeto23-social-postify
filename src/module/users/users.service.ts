import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './repositories/user.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    const userAlreadyExists = await this.userRepository.findUserByEmail(email);

    if (userAlreadyExists) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.CONFLICT,
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userRepository.createUser({
      ...createUserDto,
      password: hashedPassword,
    });

    return user;
  }

  async findUserById(id: number) {
    const user = await this.userRepository.findUserById(id);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }
}
