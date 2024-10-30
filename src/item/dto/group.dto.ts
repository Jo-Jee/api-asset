import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { Group } from '../entity/group.entity';
import { ItemDto } from './item.dto';

@Exclude()
export class GroupDto {
  @Expose()
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  id?: number;

  @Expose()
  @IsString()
  @ApiProperty()
  name: string;

  @Expose()
  @IsArray()
  @IsOptional()
  @ApiProperty()
  items: ItemDto[];

  constructor(group: Group) {
    Object.assign(this, group);
    this.items = group.groupItems.map((groupItem) => groupItem.item);
  }
}
