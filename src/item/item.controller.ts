import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { OkRes } from 'src/common/dto/ok.res';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ItemParam } from './dto/item.param';

@ApiTags('items')
@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}
  @Get('/:id')
  async getItem(@Param('id') id: number) {
    return this.itemService.findItem(id);
  }

  @ApiCreatedResponse()
  @Post()
  async postItem(@Body() itemParam: ItemParam) {
    return new OkRes();
  }
}
