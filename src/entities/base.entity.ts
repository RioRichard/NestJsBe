import { BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

export default class Base extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;
}
