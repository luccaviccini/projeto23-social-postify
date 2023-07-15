import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRepository } from '../user.repository';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: CreateUserDto) {
    return this.prismaService.user.create({ data });
  }

  async findUserByEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  async findUserById(id: number) {
    return this.prismaService.user.findUnique({ where: { id } });
  }
}