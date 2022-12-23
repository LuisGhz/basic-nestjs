import { PartialType, ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsUrl,
  IsPositive,
} from 'class-validator';
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({
    minimum: 0,
  })
  readonly price: number;
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({
    minimum: 0,
  })
  readonly stock: number;
  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
