import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
