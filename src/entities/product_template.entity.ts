import { Column, Entity } from 'typeorm';
import Base from './base.entity';
import { ProductName, ProductType } from 'src/constant/product.constant';

@Entity('product_template', { schema: 'public' })
export default class ProductTemplate extends Base {
  static model_name = 'product.template';

  @Column('int', { name: 'sequence' })
  sequence: number;

  @Column('int', { name: 'categ_id' })
  categ_id: number;

  @Column('int', { name: 'uom_id' })
  uom_id: number;

  @Column('int', { name: 'uom_po_id' })
  uom_po_id: number;

  @Column('enum', { name: 'type', enum: ProductType })
  type: ProductType;

  @Column('enum', { name: 'type', enum: ProductType })
  detailed_type: ProductType;

  @Column('json', { name: 'name' })
  name: ProductName;

  @Column('float', { name: 'list_price' })
  list_price: number;

  @Column('bool', { name: 'sale_ok' })
  sale_ok: boolean;

  @Column('bool', { name: 'active' })
  active: boolean;
}
