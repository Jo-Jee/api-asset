import { ApiProperty } from '@nestjs/swagger';

export class ItemParam {
  @ApiProperty()
  name: string;
}
