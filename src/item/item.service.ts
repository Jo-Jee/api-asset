import { Injectable } from '@nestjs/common';
import { ItemNotFound } from './exception/itemNotFound.exception';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entity/item.entity';
import { IsNull, Repository } from 'typeorm';
import { ItemDto } from './dto/item.dto';
import { RecordDto } from './dto/record.dto';
import { Record } from './entity/record.entity';
import { Group } from './entity/group.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
    @InjectRepository(Record) private recordRepository: Repository<Record>,
    @InjectRepository(Group) private groupRepository: Repository<Group>,
  ) {}

  async findItem(id: number) {
    const item = await this.itemRepository.findOneBy({ id: id });

    if (!item) throw new ItemNotFound();

    return item;
  }

  async findAllItem(year: number) {
    const items = await this.itemRepository.find({
      relations: ['records'],
      where: { records: [{ year: year }, { year: IsNull() }] },
    });

    return items;
  }

  async createItem(itemDto: ItemDto) {
    const item = { ...new Item(), ...itemDto };

    this.itemRepository.save(item);
  }

  async createRecord(itemId: number, recordDto: RecordDto) {
    const item = await this.itemRepository.findOneBy({ id: itemId });

    if (!item) throw new ItemNotFound();

    const record = { ...new Record(), ...recordDto, item: item };

    this.recordRepository.save(record);
  }

  async findAllGroups() {
    const groups = await this.groupRepository.find({
      relations: ['itemGroupRelations.item'],
    });

    console.log(groups);

    return groups;
  }
}
