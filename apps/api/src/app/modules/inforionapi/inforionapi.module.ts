import { Module } from '@nestjs/common';
import { InforionapiController } from './inforionapi.controller';
import { InforionapiService } from './inforionapi.service';

@Module({
  controllers: [InforionapiController],
  providers: [InforionapiService],
})
export class InforionapiModule {}
