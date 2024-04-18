import { ApiProperty } from '@nestjs/swagger';
import { ProductName } from 'src/constant/product.constant';
import { Property_AttachmentProductTemplateGetAll } from '../attachment/attachment-property.dto';

export class Property_ProductTemplateGetAll {
  @ApiProperty({
    type: Number,
    description: 'Id product template',
  })
  id: number;

  @ApiProperty({
    type: ProductName,
    description: 'Product template name',
  })
  name: ProductName;

  @ApiProperty({
    type: Number,
    description: 'Sale price (without taxed) of product template',
  })
  list_price: number;

  @ApiProperty({
    type: [Property_AttachmentProductTemplateGetAll],
    description: 'List image of Product Template',
  })
  images: Property_AttachmentProductTemplateGetAll[];
}
