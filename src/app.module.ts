import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductTemplateModule } from './modules/product-template/product_template.module';
import { DatabaseModule } from './modules/database/database.module';
import { ImagesModule } from './modules/images/images.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.development'],
    }),
    DatabaseModule,
    ProductTemplateModule,
    ImagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
