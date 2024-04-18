import { Injectable, Logger } from '@nestjs/common';
import { ProductTemplateRepo } from './product_template.repository';
import { Response_ProductTemplateGetAll } from 'src/dto';

@Injectable()
export class ProductTemplateService {
  private readonly logger = new Logger(`${ProductTemplateService.name}`);
  constructor(private readonly productTemplateRepo: ProductTemplateRepo) {}

  async getAll() {
    this.logger.log(`${this.getAll.name}`);
    const data = await this.productTemplateRepo.getAll();
    return new Response_ProductTemplateGetAll(data);
  }
}
