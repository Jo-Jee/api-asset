import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AccountParam {
  @IsString()
  @ApiProperty()
  name: string;
}
