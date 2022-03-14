import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkorderController } from './workorder.controller';
import { WorkorderRepository } from './workorder.repository';
import { WorkorderService } from './workorder.service';

@Module({
  controllers: [WorkorderController],
  providers: [WorkorderService],
  imports: [TypeOrmModule.forFeature([WorkorderRepository])],
})
export class WorkorderModule {}
