import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { RecordDto } from './record.dto';

export class ItemDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  id?: number;

  @IsString()
  @ApiProperty()
  name: string;

  @IsArray()
  @IsOptional()
  @ApiProperty()
  records?: RecordDto[];
}
