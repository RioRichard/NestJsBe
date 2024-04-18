import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { Response } from 'express';
import { ImagesService } from './images.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { createReadStream } from 'fs';

@Controller('images')
@ApiTags('Images Controller')
export class ImagesController {
  private readonly logger = new Logger(`${ImagesController.name}`);

  constructor(private readonly imagesService: ImagesService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get Image follow id' })
  async getImage(@Res() res: Response, @Param() param: { id: number }) {
    try {
      this.logger.log(this.getImage.name);
      const data = await this.imagesService.getFile(param.id);
      res.set({ 'Content-Type': data.mimetype });
      res.sendFile(data.filename);
    } catch (error) {
      this.logger.error(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
