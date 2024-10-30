import { Injectable } from '@nestjs/common';
import { ItemNotFound } from './exception/itemNotFound.exception';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entity/item.entity';
import { In, IsNull, Repository } from 'typeorm';
import { ItemDto } from './dto/item.dto';
import { RecordDto } from './dto/record.dto';
import { Record } from './entity/record.entity';
import { Group } from './entity/group.entity';
import { GroupParam } from './dto/group.param';
import { GroupItem } from './entity/groupItem.entity';

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
      relations: ['groupItems.item'],
    });

    return groups;
  }

  async createGroup(groupParam: GroupParam) {
    const group: Group = { ...new Group(), ...groupParam };
    const items = await this.itemRepository.find({
      where: { id: In(groupParam.itemIds) },
    });

    group.groupItems = items.map((item) => {
      const groupItem: GroupItem = {
        ...new GroupItem(),
        item: item,
        group: group,
      };
      return groupItem;
    });

    this.groupRepository.save(group);
  }
}
