import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Record } from './record.entity';
import { ItemGroupRelation } from './itemGroupRelation.entity copy';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Record, (record) => record.item)
  records: Record[];

  @OneToMany(
    () => ItemGroupRelation,
    (itemGroupRelation) => itemGroupRelation.item,
  )
  itemGroupRelation: ItemGroupRelation[];
}
