import { ApiProperty } from '@nestjs/swagger';
import { API_STATUS, BASE_MESSAGE } from 'src/constant/app.constant';

export class Response_BaseSingle {
  @ApiProperty({
    type: Number,
    required: true,
    example: 200,
    description: 'Status code HTTP follow RESTFUL rule',
  })
  code: number;

  @ApiProperty({
    type: Object,
    required: false,
    description: 'Returned Data. {} when nothing to return',
    example: { name: 'Rio', age: 23 },
  })
  data: object;

  @ApiProperty({
    type: String,
    required: true,
    description: 'Message',
    example: 'Success',
  })
  message: string;
}

export class Response_BaseMulti extends Response_BaseSingle {
  @ApiProperty({
    type: [Object],
    required: false,
    description: 'Returned Data',
    example: [{ name: 'Rio', age: 23 }],
  })
  data: object[];

  @ApiProperty({
    type: Number,
    required: true,
    description: 'Number of return data. [] when nothing to return',
    example: 1,
  })
  count: number;

  @ApiProperty({
    type: Number,
    required: true,
    description: 'Number of total data',
    example: 1,
  })
  total: number;

  constructor(result: any) {
    super();
    const {
      code = API_STATUS.SUCCESS,
      message = BASE_MESSAGE.SUCCESS,
      data,
      total,
    } = result;
    this.code = code;
    this.message = message;
    this.data = data;
    this.total = total;
    this.count = data.length;
  }
}
