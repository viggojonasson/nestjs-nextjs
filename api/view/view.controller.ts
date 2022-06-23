import { Controller, Get, Res, Req, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { parse } from 'url';

import { ViewService } from './view.service';

@Controller('/')
export class ViewController {
  constructor(private viewService: ViewService) {}

  async handler(req: Request, res: Response, props?: any) {
    const parsedUrl = parse(req.url, true);

    await this.viewService.getNextServer().render(
      req,
      res,
      parsedUrl.pathname,
      Object.assign(parsedUrl.query, {
        data: 'this is data from view.controller.ts line 19',
      }),
    );
  }

  @Get('/')
  public async showIndex(@Req() req: Request, @Res() res: Response) {
    await this.handler(req, res);
  }

  @Get('*')
  public async showNotFound(@Req() req: Request, @Res() res: Response) {
    await this.handler(req, res);
  }

  @Get('_next*')
  public async assets(@Req() req: Request, @Res() res: Response) {
    const parsedUrl = parse(req.url, true);
    await this.viewService
      .getNextServer()
      .render(req, res, parsedUrl.pathname, parsedUrl.query);
  }
}
