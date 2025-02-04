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
export class Price {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  price: number;

  @Column()
  year: number;

  @Column()
  month: number;

  @ManyToOne(() => Item, (item) => item.records, { nullable: false })
  item: Item;
}
