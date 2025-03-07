import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Record } from './record.entity';
import { GroupItem } from './groupItem.entity';
import { Price } from './price.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Price, (price) => price.item)
  prices: Price[];

  @OneToMany(() => Record, (record) => record.item)
  records: Record[];

  @OneToMany(() => GroupItem, (groupItem) => groupItem.item)
  groupItem: GroupItem[];
}
