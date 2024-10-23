import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './item.entity';
import { ItemGroupRelation } from './itemGroupRelation.entity copy';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Item, (item) => item.records, { nullable: false })
  item: Item;

  @OneToMany(
    () => ItemGroupRelation,
    (itemGroupRelation) => itemGroupRelation.group,
  )
  itemGroupRelation: ItemGroupRelation[];
}
