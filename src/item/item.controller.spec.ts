import { Test, TestingModule } from '@nestjs/testing';
import { ItemController } from './item.controller';
import { ItemNotFound } from './exception/itemNotFound.exception';
import { ItemService } from './item.service';

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
    it('should throw ItemNotFound', async () => {
      await expect(controller.getItem(1)).rejects.toEqual(new ItemNotFound());
    });

    it('should return ok', async () => {});
  });
});
