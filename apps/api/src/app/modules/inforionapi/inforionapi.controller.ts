import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import {ApiProduces,ApiResponse,ApiConsumes,ApiBody } from '@nestjs/swagger';
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
    console.log(
      'postExportBOD',
      util.inspect(body, false, null, true /* enable colors */)
    );

    if (body.maintenanceorder) {
      console.log('BOD is a maintenanceorder');
    }

    if (body.employeeworktime) {
      console.log('BOD is a employeeworktime');
    }

    return { message: 'Welcome to postExportBOD!' };
  }
}
