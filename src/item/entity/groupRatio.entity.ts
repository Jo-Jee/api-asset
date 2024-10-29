import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from './group.entity';

@Entity()
export class GroupRatio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  ratio: number;

  @ManyToOne(() => Group, (group) => group.groupRatio, {
    nullable: false,
  })
  group1: Group;

  @ManyToOne(() => Group, (group) => group.groupRatio, {
    nullable: false,
  })
  group2: Group;
}
