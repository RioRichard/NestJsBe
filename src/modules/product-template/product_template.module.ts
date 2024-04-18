import { Module } from '@nestjs/common';
import { ProductTemplateController } from './product-template.controller';
import { ProductTemplateService } from './product_template.service';
import { ProductTemplateRepo } from './product_template.repository';
import { ProductTemplateProviders } from './product_template.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductTemplateController],
  providers: [
    ProductTemplateService,
    ProductTemplateRepo,
    ...ProductTemplateProviders,
  ],
  exports: [ProductTemplateService],
})
export class ProductTemplateModule {}
