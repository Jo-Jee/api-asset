import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class GroupRatioParam {
  @IsNumber()
  @ApiProperty()
  group1Id: number;

  @IsNumber()
  @ApiProperty()
  group2Id: number;

  @IsNumber()
  @ApiProperty()
  ratio: number;
}
