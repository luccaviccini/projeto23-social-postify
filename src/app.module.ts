import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './module/auth/auth.module';


@Module({
  imports: [UsersModule, PrismaModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
