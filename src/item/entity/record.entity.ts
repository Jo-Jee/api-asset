import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Item } from './item.entity';
import { Account } from './account.entity';

@Entity()
@Index(['item', 'account', 'year', 'month'], { unique: true })
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  year: number;

  @Column()
  month: number;

  @ManyToOne(() => Item, (item) => item.records, { nullable: false })
  item: Item;

  @ManyToOne(() => Account, (account) => account.records, { nullable: false })
  account: Account;
}
