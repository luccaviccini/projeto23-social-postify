import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { AuthGuard } from '../auth/auth-guard/auth.guard';
import { createPublicationDto } from './dto/create-publication.dto';
import { UserRequest } from '../auth/decorators/user-request.decorator';
import { User } from '@prisma/client'

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Body() createPublicationDto: createPublicationDto,
    @UserRequest() user: User,
  ) {
    const { id } = user;
    return this.publicationService.createPost(id, createPublicationDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  getUserPublications(@UserRequest() user: User) {
    const { id } = user;
    return this.publicationService.findByUserId(id);
  }
}
