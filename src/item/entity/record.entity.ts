import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './item.entity';

@Entity()
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

  @Column()
  day: number;

  @ManyToOne(() => Item, (item) => item.records)
  item: Item;
}
