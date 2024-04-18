import { Injectable, Logger } from '@nestjs/common';
import { ImagesRepository } from './images.repository';

@Injectable()
export class ImagesService {
  private readonly logger = new Logger(ImagesService.name);

  constructor(private readonly imageRepo: ImagesRepository) {}

  async getFile(id: number) {
    this.logger.log(this.getFile.name);
    const data = await this.imageRepo.getFile(id);
    return data;
  }
}
