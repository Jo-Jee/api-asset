import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject } from 'class-validator';
import { GroupDto } from './group.dto';

export class GroupRatioDto {
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsNumber()
  @ApiProperty()
  ratio: number;

  @IsObject()
  @ApiProperty()
  group1: GroupDto;

  @IsObject()
  @ApiProperty()
  group2: GroupDto;
}
