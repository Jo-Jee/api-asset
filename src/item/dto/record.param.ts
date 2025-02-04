import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber } from 'class-validator';

export class RecordParam {
  @IsNumber()
  @ApiProperty()
  accountId: number;

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
