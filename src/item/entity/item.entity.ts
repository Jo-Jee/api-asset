import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Record } from './record.entity';
import { GroupItem } from './groupItem.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Record, (record) => record.item)
  records: Record[];

  @OneToMany(() => GroupItem, (groupItem) => groupItem.item)
  groupItem: GroupItem[];
}
