import { HttpException, HttpStatus } from '@nestjs/common';

export class ItemNotFound extends HttpException {
  constructor() {
    super('종목을 찾을 수 없습니다', HttpStatus.NOT_FOUND);
  }
}
