import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional } from 'class-validator';

export class RecordDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  id?: number;

  @IsNumber()
  @ApiProperty()
  price: number;

  @IsNumber()
  @ApiProperty()
  quantity: number;

  @IsInt()
  @ApiProperty()
  year: number;

  @IsInt()
  @ApiProperty()
  month: number;
}
