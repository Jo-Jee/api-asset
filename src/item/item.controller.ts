import { Controller, Get, Param, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { OkRes } from 'src/common/dto/ok.res';

@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}
  @Get('/:id')
  async getItem(@Param('id') id: number) {
    return this.itemService.findItem(id);
  }

  @Get()
  async postItem() {
    return new OkRes();
  }
}
