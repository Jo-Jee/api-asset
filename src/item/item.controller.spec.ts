import { Test, TestingModule } from '@nestjs/testing';
import { ItemController } from './item.controller';
import { ItemNotFound } from './exception/itemNotFound.exception';
import { ItemService } from './item.service';
import { OkRes } from 'src/common/dto/ok.res';
import { ItemDto } from './dto/item.dto';

describe('ItemController', () => {
  let controller: ItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemService],
      controllers: [ItemController],
    }).compile();

    controller = module.get<ItemController>(ItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('get item test', () => {
    const itemDto: ItemDto = { name: 'test' };

    it('should throw ItemNotFound', async () => {
      await expect(controller.getItem(1)).rejects.toEqual(new ItemNotFound());
    });

    it('post item with ItemDto should return ok', async () => {
      expect(await controller.postItem(itemDto)).toEqual(new OkRes());
    });
  });
});
