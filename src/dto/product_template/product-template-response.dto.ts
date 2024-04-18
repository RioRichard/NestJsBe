import { ApiProperty } from '@nestjs/swagger';
import { Response_BaseMulti } from '../base/base-response.dto';
import { Property_ProductTemplateGetAll } from './product-template-property.dto';

export class Response_ProductTemplateGetAll extends Response_BaseMulti {
  @ApiProperty({
    type: [Property_ProductTemplateGetAll],
    description: 'List product template',
  })
  data: Property_ProductTemplateGetAll[];
}
