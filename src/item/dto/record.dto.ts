import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsObject, IsOptional } from 'class-validator';
import { AccountDto } from './account.dto';

export class RecordDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  id?: number;

  @IsObject()
  @ApiProperty()
  account: AccountDto;

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
