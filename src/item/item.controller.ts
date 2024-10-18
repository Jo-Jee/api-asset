import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { OkRes } from 'src/common/dto/ok.res';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ItemDto } from './dto/item.dto';

@ApiTags('items')
@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @ApiOkResponse({ type: ItemDto, isArray: true })
  @Get('/')
  async getAllItem() {
    return this.itemService.findAllItem();
  }

  @ApiOkResponse({ type: ItemDto })
  @Get('/:id')
  async getItem(@Param('id') id: number) {
    return this.itemService.findItem(id);
  }

  @ApiCreatedResponse()
  @Post()
  async postItem(@Body() itemDto: ItemDto) {
    this.itemService.createItem(itemDto);

    return new OkRes();
  }
}
