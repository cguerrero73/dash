import { Injectable } from '@nestjs/common';
import { WorkorderRepository } from './workorder.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWorkorderDto, ReadWorkorderDto } from './dtos';
import { plainToClass } from 'class-transformer';

import { Repository } from 'typeorm';

@Injectable()
export class WorkorderService {
  constructor(
    @InjectRepository(WorkorderRepository)
    private readonly repository: Repository<WorkorderRepository>
  ) {}

  async create(data: Partial<CreateWorkorderDto>){
    // const record: Workorder = await this.repository.save({
    
    // });
  
      // return plainToClass(ReadWorkorderDto, record);
      return '';
  }
}
