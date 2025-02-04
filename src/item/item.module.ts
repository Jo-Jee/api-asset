import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entity/item.entity';
import { Record } from './entity/record.entity';
import { Group } from './entity/group.entity';
import { GroupItem } from './entity/groupItem.entity';
import { GroupRatio } from './entity/groupRatio.entity';
import { Price } from './entity/price.entity';
import { Account } from './entity/account.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Account,
      Item,
      Record,
      Price,
      Group,
      GroupItem,
      GroupRatio,
    ]),
  ],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
