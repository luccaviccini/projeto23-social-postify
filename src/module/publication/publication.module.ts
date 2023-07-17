import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import { PrismaUserRepository } from '../users/repositories/implementations/prisma-user.repository';
import { UserRepository } from '../users/repositories/user.repository';
import { UsersService } from '../users/users.service';
import { PrismaPublicationRepository } from './repositories/implementations/prisma-publication.repository';
import { PublicationRepository } from './repositories/publication.repository';

@Module({
  imports: [JwtModule.register({ secret: process.env.JWT_SECRET })],
  controllers: [PublicationController],
  providers: [
    PublicationService,
    AuthService,
    UsersService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    PublicationService,
    {
      provide: PublicationRepository,
      useClass: PrismaPublicationRepository,
    },
  ],
})
export class PublicationModule {}
