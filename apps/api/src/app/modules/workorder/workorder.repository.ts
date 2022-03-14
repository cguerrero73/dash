import { Repository, EntityRepository } from 'typeorm';
import { Workorder } from './workorder.entity';

@EntityRepository(Workorder)
export class WorkorderRepository extends Repository<Workorder>{ }