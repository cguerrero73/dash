import { Controller } from '@nestjs/common';
import { WorkorderService } from './workorder.service';

@Controller('workorder')
export class WorkorderController {
    constructor(private readonly service: WorkorderService) {}
}


