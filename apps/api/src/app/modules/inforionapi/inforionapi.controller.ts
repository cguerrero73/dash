import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiProduces, ApiResponse, ApiConsumes, ApiBody } from '@nestjs/swagger';
import * as util from 'util';
import { InforionapiService } from './inforionapi.service';

import {Workorder} from '../workorder/workorder.entity';



@Controller('inforionapi')
export class InforionapiController {

  constructor(private readonly service: InforionapiService) {}

  
  @Post('ExportBOD')
  @HttpCode(200)
  @ApiProduces('application/json')
  @ApiConsumes('application/xml')
  @ApiResponse({
    status: 200,
    schema: {},
  })
  @ApiBody({})
  postExportBOD(@Body() body): { message: string } {
    console.log('postExportBOD', util.inspect(body, false, null, true /* enable colors */));

    const ROOT = body;
    if (ROOT.syncmaintenanceorder) {
      const maintenanceorderheader = ROOT.syncmaintenanceorder.dataarea[0].maintenanceorder[0].maintenanceorderheader[0];
      const activities = ROOT.syncmaintenanceorder.dataarea[0].maintenanceorder[0].maintenanceorderline;

      const wrk_tenant:string = ROOT.syncmaintenanceorder.dataarea[0].sync[0].tenantid[0];
      const wrk_org:string = maintenanceorderheader.documentid[0].id[0].$.accountingEntity;
      const wrk_code:string = maintenanceorderheader.documentid[0].id[0]._;
      const wrk_status:string = maintenanceorderheader.status[0].reasoncode[0];
      const wrk_rstatus = 'x';

      const classification = maintenanceorderheader.classification;
      let wrk_type = '';
      let wrk_mrc = '';

      classification.forEach((element) => {
        if (element.codes[0].code[0].$.listID === 'WorkType') {
          wrk_type = element.codes[0].code[0]._;
        }

        if (element.codes[0].code[0].$.listID === 'Departments') {
          wrk_mrc = element.codes[0].code[0]._;
        }
      });

      const wrk_criticality = 'x';

      let wrk_planned_hours = 0;

      if (activities) {
        activities.forEach((element) => {
          const userarea = element.userarea[0].property;

          userarea.forEach((e) => {
            if (e.namevalue[0].$.name === 'eam.TotalEstimatedHours') {
              wrk_planned_hours += Number(e.namevalue[0]._);
            }
          });
        });
      }

      const wrk_priority = maintenanceorderheader.prioritycode?.[0];
      const wrk_created = maintenanceorderheader.documentdatetime[0];
      const wrk_reported = maintenanceorderheader.reporteddatetime[0];
      const wrk_completed = maintenanceorderheader.actualtimeperiod?.[0].enddatetime?.[0];
      const wrk_start_sched = maintenanceorderheader.scheduledtimeperiod?.[0].startdatetime?.[0];
      const wrk_end_sched = maintenanceorderheader.scheduledtimeperiod?.[0].enddatetime?.[0];
      const wrk_desc = maintenanceorderheader.description?.[0];
      const wrk_equip = maintenanceorderheader.asset?.[0].id?.[0]._;
      const wrk_equip_org = maintenanceorderheader.asset?.[0].id?.[0].$.accountingEntity;
      let wrk_person = maintenanceorderheader.estimatedresourcerequirements?.[0].labourallocation?.[0].labour?.[0].resourceid?.[0].id?.[0];

      if (wrk_person && wrk_person._) {
        wrk_person = wrk_person._; 
      }

      console.log('BOD is a maintenanceorder', wrk_planned_hours);

      const wo= new Workorder;
      
      
        wo.wrk_tenant=wrk_tenant;
        wo.wrk_org=wrk_org;
        wo.wrk_code= wrk_code;
        wo.wrk_desc=wrk_desc;
        wo.wrk_status=wrk_status;
        wo.wrk_rstatus=wrk_rstatus;
        wo.wrk_type=wrk_type;
        wo.wrk_mrc=wrk_mrc;
        wo.wrk_criticality=wrk_criticality;
        wo.wrk_planned_hours=wrk_planned_hours;
        wo.wrk_priority=wrk_priority;
        wo.wrk_created=wrk_created;
        wo.wrk_reported=wrk_reported;
        wo.wrk_completed=wrk_completed;
        wo.wrk_start_sched=wrk_start_sched;
        wo.wrk_end_sched=wrk_end_sched;
        wo.wrk_equip=wrk_equip;
        wo.wrk_equip_org=wrk_equip_org;
        wo.wrk_person=wrk_person;
      
  
      this.service.createWO(wo);
  
      

    }

    if (body.employeeworktime) {
      console.log('BOD is a employeeworktime');
    }

   


    return { message: 'Welcome to postExportBOD!' };
  }
}
