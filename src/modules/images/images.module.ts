import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ImagesController } from './images.controller';
import { ImagesProviders } from './images.providers';
import { ImagesRepository } from './images.repository';
import { ImagesService } from './images.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ImagesController],
  providers: [ImagesService, ImagesRepository, ...ImagesProviders],
  exports: [ImagesService],
})
export class ImagesModule {}
