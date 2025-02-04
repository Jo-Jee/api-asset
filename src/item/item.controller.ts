import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OkRes } from 'src/common/dto/ok.res';
import { AccountParam } from './dto/account.param';
import { GroupDto } from './dto/group.dto';
import { GroupParam } from './dto/group.param';
import { GroupRatioParam } from './dto/groupRatio.param';
import { ItemDto } from './dto/item.dto';
import { RecordParam } from './dto/record.param';
import { ItemService } from './item.service';
import { PriceParam } from './dto/price.param';

@ApiTags('items')
@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOkResponse({ type: ItemDto, isArray: true })
  @Get('/groups')
  async getAllGroups() {
    const groups = await this.itemService.findAllGroups();
    return groups.map((group) => new GroupDto(group));
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

  @ApiCreatedResponse()
  @Post('/:id/records')
  async postRecord(@Param('id') id: number, @Body() recordParam: RecordParam) {
    this.itemService.createRecord(id, recordParam);

    return new OkRes();
  }

  @ApiCreatedResponse()
  @Post('/groups')
  async postGroup(@Body() groupParam: GroupParam) {
    this.itemService.createGroup(groupParam);

    return new OkRes();
  }

  @ApiCreatedResponse()
  @Post('/groups/rationes')
  async postGroupRatio(@Body() groupRatioParam: GroupRatioParam) {
    this.itemService.createGroupRatio(groupRatioParam);

    return new OkRes();
  }

  @ApiOkResponse()
  @Get('/groups/rationes')
  async getGroupRatio() {
    return this.itemService.findAllGroupRationes();
  }

  @ApiCreatedResponse()
  @Post('/accounts')
  async postAccount(@Body() accountParam: AccountParam) {
    this.itemService.createAccount(accountParam);

    return new OkRes();
  }

  @ApiCreatedResponse()
  @Post('/:id/prices')
  async postPrice(@Param('id') id: number, @Body() priceParam: PriceParam) {
    this.itemService.createPrice(id, priceParam);

    return new OkRes();
  }
}
