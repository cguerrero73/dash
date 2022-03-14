/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

 import { Logger } from '@nestjs/common';
 import { NestFactory } from '@nestjs/core';
 
 import { AppModule } from './app/app.module';
 
 import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
 
 import "reflect-metadata";
 
 async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   const globalPrefix = 'api';
   app.setGlobalPrefix(globalPrefix);
   app.enableCors();
 
 
 
   const config = new DocumentBuilder()
     .setTitle('Infor ION API')
     .setDescription('Handle BOD from Infor ION')
     .setVersion('1.0')
     .build();
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('api',app, document);
 
 
   
   const port = process.env.PORT || 3333;
 
   await app.listen(port);
   Logger.log(
     `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
   );
 }
 
 bootstrap();
 
 
 
 
 
 