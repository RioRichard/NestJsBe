import { ApiProperty } from '@nestjs/swagger';

export class Request_BaseIdNumber {
  @ApiProperty({
    type: Number,
    description: 'Id in number type',
    required: true,
    example: 1,
  })
  id: number;
}

export class Request_BaseIdString {
  @ApiProperty({
    type: String,
    description: 'Id in string type',
    required: true,
    example: '26c31925-0a17-4ec9-920a-1471cff09789',
  })
  id: string;
}

export class Request_BasePagination {
  @ApiProperty({
    type: Number,
    description: 'Current page',
    required: false,
    example: 1,
    default: 1,
  })
  page: number;

  @ApiProperty({
    type: Number,
    description: 'Limit item per page',
    required: false,
    example: 10,
    default: 10,
  })
  limit: number;
}
