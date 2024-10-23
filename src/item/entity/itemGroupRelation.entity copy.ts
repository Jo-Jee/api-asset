import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './item.entity';
import { Group } from './group.entity';

@Entity()
export class ItemGroupRelation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ratio: number;

  @ManyToOne(() => Item, (item) => item.itemGroupRelation, { nullable: false })
  item: Item;

  @ManyToOne(() => Group, (group) => group.itemGroupRelation, {
    nullable: false,
  })
  group: Group;
}
