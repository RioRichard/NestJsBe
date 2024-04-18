import { ApiProperty } from '@nestjs/swagger';

export enum ProductType {
  COMBO = 'combo',
  CONSUMABLE = 'consu',
  SERVICE = 'service',
  STOREABLE_PRODUCT = 'product',
}

export class ProductName {
  @ApiProperty({
    type: String,
    description: 'Name in English - USA',
  })
  en_US: string;
  @ApiProperty({
    type: String,
    description: 'Name in Vietnamese - Vietnam',
  })
  vi_VI: string;
}
