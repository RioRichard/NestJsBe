import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Odoo BE api')
    .setDescription('The Odoo BE API document description.')
    .setVersion('1.0')
    .addTag('ODOO BE API')
    .addServer('http://localhost:3000/')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('document', app, document);

  await app.listen(3000);
}
bootstrap();
