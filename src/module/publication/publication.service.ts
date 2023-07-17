import { Injectable, HttpException, HttpStatus  } from '@nestjs/common';
import { PublicationRepository } from './repositories/publication.repository';
import { createPublicationDto } from './dto/create-publication.dto';

@Injectable()
export class PublicationService {
  constructor(private readonly publicationRepository: PublicationRepository) {}

  async createPost(userId: number, createPublicationDto: createPublicationDto) {
    const publication = await this.publicationRepository.findByTitle(createPublicationDto.title);

    if (publication) {
      throw new HttpException('Publication already exists', HttpStatus.BAD_REQUEST);
    }

    await this.publicationRepository.create({
      ...createPublicationDto,
      userId,
    });
  }

  async findByUserId(userId: number) {
    return await this.publicationRepository.findByUserId(userId);
  }
}
