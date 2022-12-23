import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly lastName: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  @ApiProperty({
    minLength: 10,
    maxLength: 10,
  })
  readonly phone: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
