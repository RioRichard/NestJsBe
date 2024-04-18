import Attachment from 'src/entities/attachment.entity';
import { DataSource } from 'typeorm';
import { DB_CON_TOKEN } from '../database/database.constant';

export const ImagesProviders = [
  {
    provide: 'ATTACHMENT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Attachment),
    inject: [DB_CON_TOKEN],
  },
];
