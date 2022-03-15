import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';

import {Workorder} from "../workorder/workorder.entity";

@Injectable()
export class InforionapiService {
  async createWO(wo:Workorder) {
    const woRepository = getRepository(Workorder); // you can also get it via getConnection().getRepository() or getManager().getRepository()
    // const _wo = woRepository.findOne(1);
    // user.name = "Umed";
     woRepository.upsert(wo, ['wrk_tenant','wrk_org','wrk_code']);
  }
}
