import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class GroupParam {
  @IsString()
  @ApiProperty()
  name: string;

  @IsArray()
  @IsOptional()
  @ApiProperty()
  itemIds: number[];
}
