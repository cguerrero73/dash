import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InforIonMiddleware } from './middleware/inforion.middleware';

import { DatabaseModule } from './database/database.module';
import { WorkorderModule } from './modules/workorder/workorder.module';
import { ConfigModule } from './config/config.module';
import { InforionapiModule } from './modules/inforionapi/inforionapi.module';

@Module({
  imports: [ConfigModule, DatabaseModule, WorkorderModule, InforionapiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(InforIonMiddleware)
      .forRoutes({ path: 'inforionapi/*', method: RequestMethod.POST});
  }
}
