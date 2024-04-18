import { Column, Entity } from 'typeorm';
import Base from './base.entity';

@Entity('ir_attachment', { schema: 'public' })
export default class Attachment extends Base {
  @Column('int', { name: 'res_id' })
  res_id: number;

  @Column('character varying', { name: 'name' })
  name: string;

  @Column('character varying', { name: 'res_model' })
  res_model: string;

  @Column('character varying', { name: 'res_field' })
  res_field: string;

  @Column('character varying', { name: 'store_fname' })
  store_fname: string;

  @Column('character varying', { name: 'mimetype' })
  mimetype: string;
}
