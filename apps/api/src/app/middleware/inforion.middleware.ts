import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';


import xmlParser = require('express-xml-bodyparser');

const xmlParserMidleware = xmlParser();


@Injectable()
export class InforIonMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log('Request...',req);
    return xmlParserMidleware(req, res, next);
    // next();
  }
}
