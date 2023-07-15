import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [UsersModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
