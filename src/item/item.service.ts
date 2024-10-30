import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { GroupParam } from './dto/group.param';
import { GroupRatioParam } from './dto/groupRatio.param';
import { ItemDto } from './dto/item.dto';
import { RecordDto } from './dto/record.dto';
import { Group } from './entity/group.entity';
import { GroupItem } from './entity/groupItem.entity';
import { GroupRatio } from './entity/groupRatio.entity';
import { Item } from './entity/item.entity';
import { Record } from './entity/record.entity';
import { ItemNotFound } from './exception/itemNotFound.exception';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
    @InjectRepository(Record) private recordRepository: Repository<Record>,
    @InjectRepository(Group) private groupRepository: Repository<Group>,
    @InjectRepository(GroupRatio)
    private groupRatioRepository: Repository<GroupRatio>,
  ) {}

  async findItem(id: number) {
    const item = await this.itemRepository.findOneBy({ id: id });

    if (!item) throw new ItemNotFound();

    return item;
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
      relations: ['groupItems.item.records'],
      where: { groupItems: { item: { records: { year: 2024 } } } },
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

  async createGroupRatio(groupRatioParam: GroupRatioParam) {
    const groups = await this.groupRepository.find({
      where: { id: In([groupRatioParam.group1Id, groupRatioParam.group2Id]) },
    });

    let group1: Group, group2: Group;

    groups.forEach((group) =>
      group.id === groupRatioParam.group1Id
        ? (group1 = group)
        : (group2 = group),
    );

    const groupRatio = new GroupRatio();

    Object.assign(groupRatio, groupRatioParam);

    groupRatio.group1 = group1;
    groupRatio.group2 = group2;

    this.groupRatioRepository.save(groupRatio);
  }

  async findAllGroupRationes() {
    const groupRationes = await this.groupRatioRepository.find({
      relations: ['group1', 'group2'],
    });

    return groupRationes;
  }
}
