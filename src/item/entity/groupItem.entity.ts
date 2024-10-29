import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from './group.entity';
import { Item } from './item.entity';

@Entity()
export class GroupItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Group, (group) => group.groupItem, {
    nullable: false,
  })
  group: Group;

  @ManyToOne(() => Item, (item) => item.groupItem)
  item: Item;
}
