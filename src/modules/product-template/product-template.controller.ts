import { Controller, Get, HttpException, Logger, Res } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Response_ProductTemplateGetAll } from 'src/dto';
import { ProductTemplateService } from './product_template.service';

@Controller('product-template')
@ApiTags('Product Template Controller')
export class ProductTemplateController {
  private readonly logger = new Logger(`${ProductTemplateController.name}`);
  constructor(
    private readonly productTemplateService: ProductTemplateService,
  ) {}

  @Get()
  @ApiOkResponse({ type: Response_ProductTemplateGetAll })
  @ApiOperation({ summary: 'GET all product template' })
  async getAll(@Res() res: Response) {
    try {
      this.logger.log(`${this.getAll.name}`);
      const result = await this.productTemplateService.getAll();
      return res.status(200).json(result);
    } catch (error) {
      this.logger.error(`${error.status}: ${error}`);
      throw new HttpException(error, error.status || 500);
    }
  }
}
