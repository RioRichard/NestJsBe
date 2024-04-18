import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import Attachment from 'src/entities/attachment.entity';
import ProductTemplate from 'src/entities/product_template.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductTemplateRepo {
  private readonly logger = new Logger(`${ProductTemplateRepo.name}`);
  constructor(
    @Inject('PRODUCT_TEMPLATE_REPOSITORY')
    private readonly productTemplateRepository: Repository<ProductTemplate>,
  ) {}

  async getAll() {
    try {
      const countQueryBuilder =
        this.productTemplateRepository.createQueryBuilder('pt');
      const dataQueryBuilder = countQueryBuilder
        .clone()
        .leftJoin(
          Attachment,
          'at',
          `at.res_id = pt.id and res_model = '${ProductTemplate.model_name}'`,
        )
        .select([
          'pt.id as id',
          'pt.name as name',
          'pt.list_price as list_price',
          `array_agg(jsonb_build_object('name', at.name, 'id', at.id, 'mimetype', at.mimetype)) as images`,
        ])
        .groupBy('pt.id,pt.name,pt.list_price');
      const [data, total] = await Promise.all([
        dataQueryBuilder.getRawMany(),
        countQueryBuilder.getCount(),
      ]);
      console.log(data);

      return { data, total };
    } catch (error) {
      this.logger.error(`${this.getAll.name} : ${error}`);
      throw new InternalServerErrorException(error);
    }
  }
}
