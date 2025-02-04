import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber } from 'class-validator';

export class PriceDto {
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsNumber()
  @ApiProperty()
  price: number;

  @IsInt()
  @ApiProperty()
  year: number;

  @IsInt()
  @ApiProperty()
  month: number;
}
