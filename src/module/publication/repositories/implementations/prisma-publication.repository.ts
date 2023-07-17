import { Injectable } from "@nestjs/common";
import { PublicationRepository } from "../publication.repository";
import { PrismaService } from "src/prisma/prisma.service";
import { Prisma } from "@prisma/client";


@Injectable()
export class PrismaPublicationRepository implements PublicationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.PublicationUncheckedCreateInput) {
    return await this.prisma.publication.create({ data });
  }

  async findByTitle(title: string) {
    return await this.prisma.publication.findUnique({ where: { title } });
  }

  async findByUserId(userId: number) {
    return await this.prisma.publication.findMany({ where: { userId } });
  }
}
