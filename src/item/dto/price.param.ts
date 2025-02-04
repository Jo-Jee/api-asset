import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber } from 'class-validator';

export class PriceParam {
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
