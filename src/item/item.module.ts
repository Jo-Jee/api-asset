import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entity/item.entity';
import { Record } from './entity/record.entity';
import { Group } from './entity/group.entity';
import { ItemGroupRelation } from './entity/itemGroupRelation.entity copy';

@Module({
  imports: [TypeOrmModule.forFeature([Item, Record, Group, ItemGroupRelation])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
