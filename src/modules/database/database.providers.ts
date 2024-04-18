import { DataSource } from 'typeorm';
import { DB_CON_TOKEN } from './database.constant';
import ProductTemplate from 'src/entities/product_template.entity';
import Attachment from 'src/entities/attachment.entity';

export const databaseProviders = [
  {
    provide: DB_CON_TOKEN,
    useFactory: async () => {
      const POSTGRES_USER = process.env.DB_USER || 'odoo';
      const POSTGRES_PASSWORD = process.env.DB_PASS || 'odoo';
      const POSTGRES_DATABASE = process.env.DB_NAME || 'test2';
      const POSTGRES_HOST = process.env.DB_HOST || '127.0.0.1';
      const POSTGRES_PORT = process.env.DB_PORT || '5432';

      const dataSource = new DataSource({
        type: 'postgres',
        host: POSTGRES_HOST,
        port: Number(POSTGRES_PORT),
        username: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        database: POSTGRES_DATABASE,
        entities: [ProductTemplate, Attachment],
        // synchronize: true,
        // logging: true,
      });
      const resultConnection = await dataSource.initialize();
      return resultConnection;
    },
  },
];
