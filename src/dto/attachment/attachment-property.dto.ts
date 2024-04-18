import { ApiProperty } from '@nestjs/swagger';

export class Property_AttachmentProductTemplateGetAll {
  @ApiProperty({
    type: String,
    description: 'Product template name',
  })
  name: string;

  @ApiProperty({
    type: String,
    description: 'id file',
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'MIMETYPE of file',
  })
  mimetype: string;
}
