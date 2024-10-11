import { Injectable } from '@nestjs/common';
import { ItemNotFound } from './exception/itemNotFound.exception';

@Injectable()
export class ItemService {
  async findItem(id: number) {
    throw new ItemNotFound();
  }
}
