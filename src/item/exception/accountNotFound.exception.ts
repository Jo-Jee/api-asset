import { HttpException, HttpStatus } from '@nestjs/common';

export class AccountNotFound extends HttpException {
  constructor() {
    super('계좌를 찾을 수 없습니다', HttpStatus.NOT_FOUND);
  }
}
