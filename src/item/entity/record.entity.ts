import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Item } from './item.entity';

@Entity()
@Index(['item', 'year', 'month'], { unique: true })
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  year: number;

  @Column()
  month: number;

  @ManyToOne(() => Item, (item) => item.records, { nullable: false })
  item: Item;
}
