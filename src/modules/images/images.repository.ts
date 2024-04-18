import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import Attachment from 'src/entities/attachment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImagesRepository {
  private readonly logger = new Logger(ImagesRepository.name);

  constructor(
    @Inject('ATTACHMENT_REPOSITORY')
    private readonly AttachmentRepository: Repository<Attachment>,
  ) {}

  async getFile(id: number) {
    try {
      this.logger.log(`${this.getFile.name}: id: ${id}`);
      const data = await this.AttachmentRepository.findOne({
        where: { id: id },
      });
      const filename = `${process.env.FIRESTORE_PATH}/${process.env.DB_NAME}/${data.store_fname}`;
      const mimetype = data.mimetype;

      return { filename, mimetype };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error);
    }
  }
}
