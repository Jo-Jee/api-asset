import { Test, TestingModule } from '@nestjs/testing';
import { ItemController } from './item.controller';
import { ItemNotFound } from './exception/itemNotFound.exception';
import { ItemService } from './item.service';
import { OkRes } from 'src/common/dto/ok.res';
import { ItemParam } from './dto/item.param';

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
    const itemParam: ItemParam = { name: 'test' };

    it('should throw ItemNotFound', async () => {
      await expect(controller.getItem(1)).rejects.toEqual(new ItemNotFound());
    });

    it('post item with ItemParam should return ok', async () => {
      expect(await controller.postItem(itemParam)).toEqual(new OkRes());
    });
  });
});
