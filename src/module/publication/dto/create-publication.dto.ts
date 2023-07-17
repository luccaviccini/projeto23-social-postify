import { IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class createPublicationDto{
  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsString()
  @IsDateString()
  dateToPublish: Date;

  @IsBoolean()
  @IsOptional()
  published?: boolean;

  @IsNotEmpty()
  @IsString()
  socialMedia: string;
}