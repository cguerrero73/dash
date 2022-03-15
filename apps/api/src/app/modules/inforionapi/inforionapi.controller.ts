import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiProduces, ApiResponse, ApiConsumes, ApiBody } from '@nestjs/swagger';
import * as util from 'util';

@Controller('inforionapi')
export class InforionapiController {
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
      const wrk_tenant = ROOT.syncmaintenanceorder.dataarea[0].sync[0].tenantid[0];
      const wrk_org = ROOT.syncmaintenanceorder.dataarea[0].maintenanceorder[0].maintenanceorderheader[0].documentid[0].id[0].$.accountingEntity;
      const wrk_code = ROOT.syncmaintenanceorder.dataarea[0].maintenanceorder[0].maintenanceorderheader[0].documentid[0].id[0]._;
      const wrk_status = ROOT.syncmaintenanceorder.dataarea[0].maintenanceorder[0].maintenanceorderheader[0].status[0].reasoncode[0];
      const wrk_rstatus = 'x';

      const classification = ROOT.syncmaintenanceorder.dataarea[0].maintenanceorder[0].maintenanceorderheader[0].classification;
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

      const wrk_priority = ROOT.syncmaintenanceorder.dataarea[0].maintenanceorder[0].maintenanceorderheader[0].prioritycode[0];
      const wrk_criticality = 'x';

      const activities = ROOT.syncmaintenanceorder.dataarea[0].maintenanceorder[0].maintenanceorderline;
      let wrk_planned_hours = 0;

      activities.forEach((element) => {
        const userarea = element.userarea[0].property;

        userarea.forEach((e) => {
          console.log('Name', e.namevalue[0].$.name);
          if (e.namevalue[0].$.name === 'eam.TotalEstimatedHours') {
            wrk_planned_hours += Number(e.namevalue[0]._);
          }
        });
      });

      const maintenanceorderheader = ROOT.syncmaintenanceorder.dataarea[0].maintenanceorder[0].maintenanceorderheader[0];

      const wrk_created = maintenanceorderheader.documentdatetime[0];
      const wrk_reported = maintenanceorderheader.reporteddatetime[0];
      const wrk_completed = maintenanceorderheader.actualtimeperiod?.[0].enddatetime[0];
      const wrk_start_sched = maintenanceorderheader.scheduledtimeperiod?.[0].startdatetime[0];
      const wrk_end_sched = maintenanceorderheader.scheduledtimeperiod?.[0].enddatetime[0];
      const wrk_desc = maintenanceorderheader.description?.[0];
      const wrk_equip = maintenanceorderheader.asset?.[0].id?.[0]._;
      const wrk_equip_org = maintenanceorderheader.asset?.[0].id?.[0].$.accountingEntity;
      const wrk_person = maintenanceorderheader.estimatedresourcerequirements?.[0].labourallocation?.[0].labour?.[0].resourceid?.[0].id?.[0];

      console.log('BOD is a maintenanceorder', wrk_planned_hours);
    }

    if (body.employeeworktime) {
      console.log('BOD is a employeeworktime');
    }

    return { message: 'Welcome to postExportBOD!' };
  }
}
