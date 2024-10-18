import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ItemParam {
  @IsString()
  @ApiProperty()
  name: string;
}
