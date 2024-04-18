import ProductTemplate from 'src/entities/product_template.entity';
import { DataSource } from 'typeorm';
import { DB_CON_TOKEN } from '../database/database.constant';

export const ProductTemplateProviders = [
  {
    provide: 'PRODUCT_TEMPLATE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProductTemplate),
    inject: [DB_CON_TOKEN],
  },
];
