import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ItemParam {
  @IsNumber()
  @ApiProperty()
  id: number;
}
