import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GroupItem } from './groupItem.entity';
import { GroupRatio } from './groupRatio.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => GroupItem, (groupItem) => groupItem.group, { cascade: true })
  groupItems: GroupItem[];

  @OneToMany(() => GroupItem, (groupItem) => groupItem.group)
  groupRatio: GroupRatio[];
}
