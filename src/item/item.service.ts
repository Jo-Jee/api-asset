import { Injectable } from '@nestjs/common';
import { ItemNotFound } from './exception/itemNotFound.exception';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entity/item.entity';
import { Repository } from 'typeorm';
import { ItemDto } from './dto/item.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) {}

  async findItem(id: number) {
    const item = await this.itemRepository.findOneBy({ id: id });

    if (!item) throw new ItemNotFound();

    return item;
  }

  async findAllItem() {
    const items = await this.itemRepository.find();

    return items;
  }

  async createItem(itemDto: ItemDto) {
    const item = { ...new Item(), ...itemDto };

    this.itemRepository.save(item);
  }
}
