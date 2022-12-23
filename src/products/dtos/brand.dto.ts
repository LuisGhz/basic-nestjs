import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
